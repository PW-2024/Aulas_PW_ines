import { configureStore } from '@reduxjs/toolkit';
import balanceSlice from './balanceSlice';

export const store = configureStore({
    reducer: { balance: balanceSlice }
});