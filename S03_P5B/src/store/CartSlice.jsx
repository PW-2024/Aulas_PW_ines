import { createSlice } from '@reduxjs/toolkit'
//Slice é o que é resonsavel por ter toda a manipulação do estado
const CartSlice = createSlice({
    name: 'cart',
    initialState: { amount: 0, items: [] },   //valor inicial
    reducers: { //Reducers manipulam o estado
        //id, title, price, total price, amount
        addItem(state) {
            state.amount++;
        },
        removeItem(state) {
            state.amount--;
        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice.reducer;