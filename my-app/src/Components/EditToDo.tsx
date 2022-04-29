import React,{useState,ChangeEvent} from 'react'
import './EditToDo.css'
import { editToDo } from '../features/TodoSlice';
import { useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
export default function EditToDo() {
  const location = useLocation();
  const navigate=useNavigate();
  const val=location.state as locationedit
//   console.log(val.text);
const dispatch = useDispatch();
  const [edit,setEdit]=useState(val.text);
  const[title,setTitle]=useState(val.title)
  const handleTitleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setTitle(event.target.value);
 }
  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
     setEdit(event.target.value);
  }
  const handleSubmit=(event: React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    console.log(edit);
    dispatch(editToDo({
        title:title,
        text:edit,
        id:val.id
    }))
    navigate('/task');
  }
  
      console.log(location.state);
  return (   
    <div>
        <h1 className='header'>EDIT PAGE</h1>
        {/* <div className='centre'>
          <input type="text" />
          <button onClick={handleClick}>Submit</button>
        </div>
        */}
        <form className="form" >
          <h2>Enter To Do Title</h2>
        <input
              type="text"
               className="task-input"
               value={title}
               onChange={handleTitleChange}
        />
        <h2>Enter To Do Text</h2>
        <input
              type="text"
               value={edit}
               className="task-input"
               onChange={handleChange}
        />
          <div className="buttons">
               <button type="submit" className="btn add-task-btn1" onClick={handleSubmit}>Submit
             </button>
            </div>
        </form>
    </div>
  )
}
