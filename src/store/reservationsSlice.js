import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // []

export const reservationslistSlice = createSlice({
  name: 'reservationslist',
  initialState,
  reducers: {
    getReservationsList: (state, action) => {
      return action.payload;
    },
    deleteReservationsList: (state, action) => {
      const id = action.payload;
      console.log('id', id);
      return state.filter((item) => item.id !== action.payload);
    },
    createReservationsList: (state, action) => {
      state.push({
        id: action.payload,
        currentPurchases: 1,
      });
    },
    addcurrentPurchases: (state, action) => {
      const { id, max } = action.payload;
      state.map((item) => {
        if (item.id === id) {
          if (item.currentPurchases < max) {
            item.currentPurchases += 1;
          } else alert('최대 수량 입니다.');
        }
      });
    },
    subtractcurrentPurchases: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          if (item.currentPurchases > 1) item.currentPurchases -= 1;
          else alert('최소 수량은 1개 입니다 삭제 버튼을 눌러주세요');
        }
      });
    },
  },
});

export const {
  getReservationsList,
  createReservationsList,
  deleteReservationsList,
  addcurrentPurchases,
  subtractcurrentPurchases,
} = reservationslistSlice.actions;

export default reservationslistSlice.reducer;
