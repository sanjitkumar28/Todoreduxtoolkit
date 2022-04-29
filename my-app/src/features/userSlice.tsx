import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";

const initialState:user[]=localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')||'{}'):[];
const userSlice=createSlice({
     name:'todos',
     initialState,
     reducers:{
          addUser:(state,action:PayloadAction<user>)=>{
            state.push(action.payload);
            localStorage.setItem('user',JSON.stringify(state));
          } 
          }
     })
export const {addUser}=userSlice.actions;
export default userSlice.reducer;