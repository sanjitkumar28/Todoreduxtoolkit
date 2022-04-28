import React from 'react'
import Task from './Task'
import Taskform from './Taskform'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../app/store'

export default function Tasklist() {
  const todoList = useSelector((state: RootState) => state.todos);

  return (
      <>
      <Taskform/>
        <ul>
            {todoList.map(todo => (
         <Task
          key={todo.id}
          todo={todo}
        />
     ))} 
     </ul>
     </>
  )
}
