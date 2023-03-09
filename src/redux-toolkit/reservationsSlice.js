import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // []

export const reservationslistSlice = createSlice({
  name: 'reservationslist',
  initialState,
  reducers: {
    getReservationsList: (state, action) => {
      return action.payload;
    },
    createReservationsList: (state, action) => {
      state.push({
        id: action.payload,
        currentPurchases: 0,
      });
    },
    deleteReservationsList: (state, action) => {
      const id = action.payload;
      console.log('id', id);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  getReservationsList,
  createReservationsList,
  deleteReservationsList,
} = reservationslistSlice.actions;

export default reservationslistSlice.reducer;
