import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState=[] as Todo[];

const todoSlice=createSlice({
     name:'todos',
     initialState,
     reducers:{
          addToDo:(state,action:PayloadAction<Todo>)=>{
            state.push(action.payload);
          }
     }
})
export const {addToDo}=todoSlice.actions;
export default todoSlice.reducer;