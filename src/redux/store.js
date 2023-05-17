import { configureStore } from '@reduxjs/toolkit';
import plans from './plansSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        plans,
        cart
    },
  })