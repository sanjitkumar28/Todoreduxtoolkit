import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
const initialState=[] as Todo[];
const todoSearchSlice=createSlice({
     name:'todosduplicate',
     initialState,
     reducers:{
          searchTodo:(state,action:PayloadAction<Todo[]>)=>{
               return state=action.payload;
          }
     }
})
export const {searchTodo}=todoSearchSlice.actions;
export default todoSearchSlice.reducer;