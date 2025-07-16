// state changing function write here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        AddToCart: (state,action)=>{
            state.cart.push(action.payload)
        },

    }
});

export const {AddToCart} = counterSlice.actions;
export default counterSlice.reducer;