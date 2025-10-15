import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState, apiStatus, type ReturnType, tableData, type MUL_STATUS } from "./constants";
import ApiServices from "./apiService";

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const returnData: ReturnType = {
                name: 'abc',
                city: 'def',
                mobile: 9999999999,
                place: 'ewe'
            }
            resolve(returnData)
        }, 5000)
    })
}

const fetchEmployeeList = () => {
    return ApiServices.getEmployeeList()
}

export const employeeList = createAsyncThunk('employeeList/data', async () => {
    try {
        const response = await fetchEmployeeList()
        return response
    }
    catch (err) {
        throw err
    }
})

export const userData = createAsyncThunk('userData/data', async () => {
    try {
        const response = await fetchData();
        return response
    } catch (err) {
        throw (err)
    }
})

const updateTableData = (index: number, data: any, status: MUL_STATUS) => {
    tableData[index].result = JSON.stringify(data)
    tableData[index].status = status === apiStatus.success ? true : false
    tableData[index].progress_status = status
}

const dataReducer = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload }
        },
        removeKeyFromState(state, action) {
            let tempStateObj: any = state;
            delete tempStateObj[action?.payload]
            return tempStateObj;
        },
        resetState() {
            return initialState
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userData.pending, (state) => {
                state.status = apiStatus.pending
                state.data = {}
                // updating table data
                updateTableData(0, {}, apiStatus.pending)
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.status = apiStatus.success
                state.data = action?.payload
                // updating table data
                updateTableData(0, action.payload, apiStatus.success)
            })
            .addCase(userData.rejected, (state) => {
                state.status = apiStatus.failure
                state.data = {}
                // updating table data
                updateTableData(0, {}, apiStatus.failure)
            })
            .addCase(employeeList.pending, (state) => {
                state.employeeListStatus = apiStatus.pending
                // updating table data
                updateTableData(1, {}, apiStatus.pending)
            })
            .addCase(employeeList.fulfilled, (state, action) => {
                state.employeeListStatus = apiStatus.success
                state.employeeList = action.payload
                // updating table data
                updateTableData(1, action.payload, apiStatus.success)
            })
            .addCase(employeeList.rejected, (state) => {
                state.employeeListStatus = apiStatus.failure
                state.employeeList = {}
                // updating table data
                updateTableData(1, {}, apiStatus.failure)
            })
    },
})
export const { updateState, removeKeyFromState, resetState } = dataReducer.actions
export default dataReducer.reducer