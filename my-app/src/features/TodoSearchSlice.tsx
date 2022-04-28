import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState=[] as Todo[];
const todoSearchSlice=createSlice({
     name:'todosduplicate',
     initialState,
     reducers:{
          searchTodo(state,action:PayloadAction<Todo[]>){
              console.log('inside search tododispatch');
              return state=action.payload;
          },
     }
})
export const {searchTodo}=todoSearchSlice.actions;
export default todoSearchSlice.reducer;