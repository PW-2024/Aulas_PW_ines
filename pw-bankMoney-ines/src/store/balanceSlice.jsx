import { createSlice } from '@reduxjs/toolkit'

const balanceSlice = createSlice({
    name: 'balance',
    initialState: { value: 300 },   //valor inicial
    reducers: {
        increment: state => { state.value += 1 },
        decrement: (state, action) => { state.value -= action.payload }
    }
})

export const balanceActions = balanceSlice.actions;
export default balanceSlice.reducer;