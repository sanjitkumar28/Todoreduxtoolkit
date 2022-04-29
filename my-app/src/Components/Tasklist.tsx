import React from 'react'
import Task from './Task'
import Taskform from './Taskform'
import { useSelector,useDispatch } from 'react-redux'
import { data, RootState } from '../app/store'

export default function Tasklist() {
  const todoList = useSelector((state: RootState) => state.todos);
  const todoListduplicat=useSelector(data)
  const todoListFinal=todoListduplicat.length>0?todoListduplicat:todoList
  return (
      <>
      <Taskform/>
        <ul>
            {todoListFinal.map(todo => (
         <Task
          key={todo.id}
          todo={todo}
        />
     ))} 
     </ul>
     </>
  )
}
