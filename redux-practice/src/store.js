import { configureStore, createSlice } from '@reduxjs/toolkit';


const handleList = createSlice({
    name: 'lists',
    initialState:[],
    reducers:{
        addList:(state,action)=>{
            state.push({text:action.payload, id:Date.now()});
        },
        deleteList:(state,action)=>
        state.filter((list)=>list.id!==action.payload),
    }
})


const store = configureStore({reducer:handleList.reducer});
export default store;
export const {addList,deleteList} = handleList.actions;