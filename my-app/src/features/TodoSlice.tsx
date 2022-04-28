import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState=[] as Todo[];
const todoSlice=createSlice({
     name:'todos',
     initialState,
     reducers:{
          addToDo:(state,action:PayloadAction<Todo>)=>{
            console.log('dispatch recv');
            state.push(action.payload);
          },
          deleteToDo:(state,action:PayloadAction<string>)=>{
            console.log('delete do to dispatch rcv');
            const index=state.findIndex((todo)=>todo.id===action.payload)
            state.splice(index,1); 
          },
          clearAll:(state,action)=>{
               console.log('çlear dispatch');
            return state=[] ;
          },
          SortToDo(state,action){
               state.sort((a,b)=>a.text.localeCompare(b.text))
          },
          searchTodo(state,action:PayloadAction<Todo[]>){
              console.log('inside search tododispatch');
              return state=action.payload;
          }
     }
})
export const {addToDo,deleteToDo,clearAll,SortToDo,searchTodo}=todoSlice.actions;
export default todoSlice.reducer;