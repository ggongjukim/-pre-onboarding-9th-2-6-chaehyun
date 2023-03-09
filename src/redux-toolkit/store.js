import { configureStore } from '@reduxjs/toolkit';
import { reservationslistSlice } from './reservationsSlice';
import { contentlistSlice } from './contentSlice';

const store = configureStore({
  reducer: {
    reservations: reservationslistSlice.reducer,
    contents: contentlistSlice.reducer,
  },
});
export default store;
