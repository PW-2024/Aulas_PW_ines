import { createSlice } from '@reduxjs/toolkit'
//Slice é o que é resonsavel por ter toda a manipulação do estado
const UISlice = createSlice({
    name: 'UI',
    initialState: { showCart: false },   //valor inicial
    reducers: { //Reducers manipulam o estado
        toggleCart: state => { state.showCart = !state.showCart },
    }
})

export const UIActions = UISlice.actions;
export default UISlice.reducer;