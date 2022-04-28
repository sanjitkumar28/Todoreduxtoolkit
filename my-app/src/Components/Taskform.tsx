import React, { useState,ChangeEvent ,FormEvent, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from "../app/store";
import { v4 as uuid } from "uuid";
import { addToDo,clearAll,SortToDo,searchTodo} from '../features/TodoSlice';
export default function Taskform() {
    //write states
    const [newTodo, setNewTodo]=useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const selectedAssets = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    //write functions
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }
    const handleSubmit=(event: React.MouseEvent<HTMLElement>)=>{
      console.log('inside submit');
      
        event.preventDefault();
        const str:string=uuid()
        const todoval=newTodo.trim();
        if(todoval.length>0){
          dispatch(addToDo({
            text:todoval,
            id:str
          }))
        }
       setNewTodo("");
    }
    const handleClear=(event: React.MouseEvent<HTMLElement>)=>{
      console.log('inside clear AL');
     event.preventDefault();
     dispatch(clearAll({}));
    }
    const handleSort=(event:React.MouseEvent<HTMLElement>)=>{
      console.log('inside sort');
      event.preventDefault();
      dispatch(SortToDo({}))
  }
  
  
    useEffect(()=>{
      let filteredAssetsData = searchTerm.length === 0 ?selectedAssets:
      selectedAssets.filter((asset: Todo) => asset.text.toLowerCase().includes(searchTerm.toLowerCase()))
      dispatch(searchTodo(filteredAssetsData));
      },[searchTerm])
  const handleSearchChange=(event:ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value);
    setSearchTerm(event.target.value);
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
                    value={searchTerm}
                    onChange={handleSearchChange}
                    />
               </div>
               <div className="buttons">
               <button type="submit" className="btn add-task-btn" onClick={handleSubmit}>Submit
             </button>
              <button className="btn clear-btn" onClick={handleClear}>
               Clear
           </button>
           <button className="btn clear-btn" onClick={handleSort}>
               Sort 
           </button>
         </div>
        </form>
    </>
    </div>
  )
}

