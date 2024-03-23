import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './UISlice';
import cartReducer from './CartSlice'

export const store = configureStore({
    reducer: { toggleCart: UIReducer, cart: cartReducer}
});