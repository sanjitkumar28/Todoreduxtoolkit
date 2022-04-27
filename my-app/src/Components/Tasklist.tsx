import React from 'react'
import Task from './Task'
import Taskform from './Taskform'
export default function Tasklist() {
  return (
      <>

      <Taskform/>
        <ul>
            {/* {todos.map(todo => (
         <Task
          key={todo.id}
          todo={todo}
        />
     ))} */}
     </ul>
     </>
  )
}
