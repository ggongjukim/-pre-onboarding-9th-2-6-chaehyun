import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // []

export const contentlistSlice = createSlice({
  name: 'contentlist',
  initialState,
  reducers: {
    getContentList: (state, action) => {
      return action.payload;
    },
  },
});

export const { getContentList } = contentlistSlice.actions;

export default contentlistSlice.reducer;
