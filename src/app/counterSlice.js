import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("counter")?JSON.parse(localStorage.getItem("counter")):{
    count: 0
}
console.log(initialState)
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increament: (state)=>{
            ++state.count;
            localStorage.setItem("counter",JSON.stringify(state))
        },
        decrement: (state)=>{

            --state.count;
            localStorage.setItem("counter",JSON.stringify(state))
        },
    }
});
export const {increament,decrement} = counterSlice.actions;
export default counterSlice.reducer;