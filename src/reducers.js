import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserProfile = async () => {
  // Simulate API call
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        profilePic: 'https://via.placeholder.com/150',
      });
    }, 1000)
  );
};

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const response = await fetchUserProfile();
    return response;
  } catch (err) {
    console.log(err.message);
  }
});
const dataReducer = createSlice({
  name: 'data',
  initialState: {},
  reducers: {
    addData(state, action) {
      return { ...state, ...action?.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action?.payload;
      })
      .addCase(getUserData.rejected, (state) => {
        state.status = 'failure';
      });
  },
});
export const { addData } = dataReducer.actions;
export default dataReducer.reducer;
