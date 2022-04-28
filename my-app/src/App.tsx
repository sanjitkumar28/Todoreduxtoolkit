import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './Components/Tasklist';
import Login from './Components/Login/Login';
import EditToDo from './Components/EditToDo';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Register from './Components/Register/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register/>}/>
      <Route path="/task" element={<Tasklist/>} />
      <Route path='/edit' element={<EditToDo/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
