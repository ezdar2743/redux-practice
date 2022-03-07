import { configureStore, createSlice } from '@reduxjs/toolkit';

const handleCount = createSlice({
    name:"count",
    initialState:0,
    reducers:{
        add:(state,action)=>state+1,
        minus:(state,action)=>state-1,
    }
})

const store = configureStore({reducer:handleCount.reducer})
export default store;
export const {add,minus} = handleCount.actions;