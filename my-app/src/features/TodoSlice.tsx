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
          clearAll:(state)=>{
               console.log('clear dispatch');
            return state=[] ;
          },
          SortToDo(state,action){
               state.sort((a,b)=>a.text.localeCompare(b.text))
          },
          searchTodo(state,action:PayloadAction<Todo[]>){
              console.log('inside search tododispatch');
              return state=action.payload;
          },
          editToDo(state,action:PayloadAction<Todo>){
               console.log('inside edit dispatch');
               let todos=state;
               state=todos.map((todo)=>{
                  if(todo.id==action.payload.id){
                       todo.text=action.payload.text;
                  } 
                  return todo;
               })
          }
     }
})
export const {addToDo,deleteToDo,clearAll,SortToDo,searchTodo,editToDo}=todoSlice.actions;
export default todoSlice.reducer;