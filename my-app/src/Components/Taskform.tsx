import React, { useState,ChangeEvent ,FormEvent, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from "../app/store";
export default function Taskform() {
    //write states
    const [newTodo, setNewTodo]=useState('');
    // const todoList = useSelector((state: RootState) => state);
    // const dispatch = useDispatch();

    //write functions
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }
  return (
    <div>
         <>
      <div className='header'>
               <h1>MY TO DO APP</h1>
           </div>
           <form className="form" >
              <input
              type="text"
               placeholder="Add Your To Do"
               value={newTodo}
               className="task-input"
               onChange={handleChange}
                />
               <div className='search'>
                <input type="text"
                    placeholder=" Search..."
                    name="search"
                   
                    />
               </div>
               <div className="buttons">
               <button type="submit" className="btn add-task-btn">Submit
             </button>
              <button className="btn clear-btn" >
               Clear
           </button>
           <button className="btn clear-btn">
               Sort 
           </button>
         </div>
        </form>
       
    </>
    </div>
  )
}

