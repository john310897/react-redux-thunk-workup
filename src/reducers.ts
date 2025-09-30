import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type StateType = {
  data: any;
  status: 'IDEL' | 'PENDING' | 'SUCCESS' | 'FAILURE'
}
const initialState: StateType = {
  data: {},
  status: "IDEL"
}
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('None'))
    }, 1000)
  })
}

export const getUserData = createAsyncThunk('getUserData/data', async () => {
  try {
    const response = await fetchData()
    return response
  }
  catch (err) {
    // console.error(err)
    throw err
  }
})

const dataReducer = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = "PENDING"
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "SUCCESS"
        state.data = action.payload
      })
      .addCase(getUserData.rejected, (state) => {
        console.log("in reject")
        state.status = "FAILURE"
      })
  },
})

export default dataReducer.reducer