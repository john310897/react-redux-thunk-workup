import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState, apiStatus, type ReturnType, type EmployeeType } from "./constants";
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
                console.log('in pending state...')
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.status = apiStatus.success
                state.data = action?.payload
                console.log("in success state...", action?.payload)
            })
            .addCase(userData.rejected, (state) => {
                state.status = apiStatus.failure
                state.data = {}
                console.log("in failure state...")
            })
            .addCase(employeeList.pending, (state) => {
                state.employeeListStatus = apiStatus.pending
                console.log("in pending state...")
            })
            .addCase(employeeList.fulfilled, (state, action) => {
                state.employeeListStatus = apiStatus.success
                state.employeeList = action.payload
                console.log("in success state...", action?.payload)
            })
            .addCase(employeeList.rejected, (state) => {
                state.employeeListStatus = apiStatus.failure
                state.employeeList = {}
                console.log("in failure state...")
            })
    },
})
export const { updateState, removeKeyFromState, resetState } = dataReducer.actions
export default dataReducer.reducer