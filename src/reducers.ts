import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type StateType = {
  status: 'IDLE' | 'SUCCESS' | 'FAILURE' | 'PENDING'
  data: any
}
const initialState: StateType = {
  status: 'IDLE',
  data: {}
}

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        name: 'john',
        place: 'abc'
      })
    }, 1000)
  })
}

export const getUserData = createAsyncThunk('getUserData/data', async () => {
  try {
    const response = await fetchData();
    return response
  } catch (err) {
    throw err
  }
})

const dataReducer = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = "PENDING"
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'SUCCESS'
        state.data = action.payload
      })
      .addCase(getUserData.rejected, (state) => {
        state.status = 'FAILURE'
      })
  }
})

export default dataReducer.reducer