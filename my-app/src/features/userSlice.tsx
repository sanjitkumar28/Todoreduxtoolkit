import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:user[]=localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')||'{}'):[];

const userSlice=createSlice({
     name:'todos',
     initialState,
     reducers:{
          addUser:(state,action:PayloadAction<user>)=>{
            state.push(action.payload);
            localStorage.setItem('todotask',JSON.stringify(state));
          },

     }
})
export const {}=userSlice.actions;
export default userSlice.reducer;