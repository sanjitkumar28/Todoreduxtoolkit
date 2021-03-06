import React from 'react'
import Task from './Task'
import Taskform from './Taskform'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../app/store'

export default function Tasklist() {
  const todoList = useSelector((state: RootState) => state.todos);
  // const todoList:Todo[]=localStorage.getItem('todotask')?
  // JSON.parse(localStorage.getItem('todotask')||'{}'):[];
  const todoListduplicat=useSelector((state: RootState)=>state.todosuplicate)
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
