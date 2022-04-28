import React from 'react'
import {deleteToDo} from '../features/TodoSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
interface ITodoListItemProps {
  todo: Todo;
}
export default function Task({todo}:ITodoListItemProps) {
const dispatch=useDispatch();
const history=useNavigate();
  return (
    <div>
       <ul>
           <li className="todo-row">{todo.text}
           <div className="button" >
           {/* <Link to="/edit" style={{ color: '#FFF',textDecoration: 'none'}}>EDIT</Link> */}
           <div onClick={()=> history('/edit',{state:{text:todo.text,id:todo.id}})}>Edit</div>
           </div>
           <div className="button" >
           <div onClick={()=>{dispatch(deleteToDo(todo.id))}}>Delete</div>
           </div>
           </li>
           
        </ul>
    </div>
  )
}
