// call and collect all slices here
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})
export default store;