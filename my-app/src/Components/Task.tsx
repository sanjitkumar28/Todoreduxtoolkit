import React from 'react'
import {deleteToDo} from '../features/TodoSlice';
import { useSelector,useDispatch } from 'react-redux';
interface ITodoListItemProps {
  todo: Todo;
}
export default function Task({todo}:ITodoListItemProps) {
const dispatch=useDispatch();
  return (
    <div>
       <ul>
           <li className="todo-row">{todo.text}
           <button>Edit</button>
           <button onClick={()=>{dispatch(deleteToDo(todo.id))}}>Delete</button>
           </li>
           
        </ul>
    </div>
  )
}
