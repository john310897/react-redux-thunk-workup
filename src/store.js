import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers.js';
export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
