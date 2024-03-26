import { createSlice } from '@reduxjs/toolkit'
//Slice é o que é resonsavel por ter toda a manipulação do estado
const CartSlice = createSlice({
    name: 'cart',
    initialState: { amount: 0, items: [] },   //valor inicial
    reducers: { //Reducers manipulam o estado
        //id, title, price, total price, amount
        addItem(state, action) {
            state.amount++;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++; //Aumenta a quantidade do item existente
                existingItem.totalPrice += newItem.price; //Atualiza o preço total
            }
            else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            }
        },
        removeItem(state, action) {
            state.amount--;
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem !== undefined) { //Verificar se o item foi encontrado no array
                if (existingItem.quantity === 1) {  //Verificar se a quantidade chegar a 1
                    state.items.splice(existingItem, 1); //Remove o item do carrinho se a quantidade for 1
                } else {
                    existingItem.quantity--; //Diminui a quantidade do item
                    existingItem.totalPrice -= existingItem.price; // Atualiza o preço total
                }
            }
        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice.reducer;