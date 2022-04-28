import React from 'react'
import './EditToDo.css'
export default function EditToDo() {
  const handleClick=()=>{
      
  }
  return (
    <div>
        <h1 className='header'>EDIT PAGE</h1>
        <div className='centre'>
          <input type="text" />
          <button onClick={handleClick}>Submit</button>
        </div>
       
    </div>
  )
}
