import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Todo[]=localStorage.getItem('todotask')?
JSON.parse(localStorage.getItem('todotask')||'{}'):[];

const todoSlice=createSlice({
     name:'todos',
     initialState,
     reducers:{
          addToDo:(state,action:PayloadAction<Todo>)=>{
            state.push(action.payload);
            localStorage.setItem('todotask',JSON.stringify(state));
          },
          deleteToDo:(state,action:PayloadAction<string>)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload)
            state.splice(index,1); 
            localStorage.setItem('todotask',JSON.stringify(state))
          },
          clearAll:(state)=>{
          let taskobj:Todo[]=[]
          localStorage.setItem('todotask',JSON.stringify(taskobj))
            return state=[] ;
           ;
          },
          SortToDo:(state,action)=>{
               console.log('inside sort');
               
               state.sort((a,b)=>a.text.localeCompare(b.text))
               localStorage.setItem('todotask',JSON.stringify(state));
          },
          editToDo:(state,action:PayloadAction<Todo>)=>{
               let todos=state;
               state=todos.map((todo)=>{
                  if(todo.id===action.payload.id){
                       todo.title=action.payload.title
                       todo.text=action.payload.text
                  } 
                  return todo;
               })
               localStorage.setItem('todotask',JSON.stringify(state));
          }
     }
})
export const {addToDo,deleteToDo,clearAll,SortToDo,editToDo}=todoSlice.actions;
export default todoSlice.reducer;