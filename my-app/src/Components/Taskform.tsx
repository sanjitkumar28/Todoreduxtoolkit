import React, { useState,ChangeEvent ,FormEvent, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from "../app/store";
import { v4 as uuid } from "uuid";
import { addToDo,clearAll,SortToDo} from '../features/TodoSlice';
import { searchTodo } from '../features/TodoSearchSlice';
export default function Taskform() {
    
    const [newTodo, setNewTodo]=useState('');
    const[toDoTitle,setToDoTitle]=useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const selectedAssets = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleTitleChange=(event:ChangeEvent<HTMLInputElement>)=>{
      setToDoTitle(event.target.value);
  }

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(event.target.value);
    }
    const handleSubmit=(event: React.MouseEvent<HTMLElement>)=>{
      // console.log('inside submit');
      
        event.preventDefault();
        const str:string=uuid()
        const todoval=newTodo.trim();
        const titleval=toDoTitle;
        console.log(titleval);
        
        if(todoval.length>0){
          dispatch(addToDo({
            title:titleval,
            text:todoval,
            id:str
          }))
        }
       setNewTodo("");
       setToDoTitle('');
    }
    const handleClear=(event: React.MouseEvent<HTMLElement>)=>{
      // console.log('inside clear AL');
     event.preventDefault();
     dispatch(clearAll());
    }
    const handleSort=(event:React.MouseEvent<HTMLElement>)=>{
      // console.log('inside sort');
      event.preventDefault();
      dispatch(SortToDo({}))
  }
  // useEffect(()=>{
  //   let filteredAssetsData = searchTerm.length === 0 ?selectedAssets:
  //   selectedAssets.filter((asset: Todo) => asset.text.toLowerCase().includes(searchTerm.toLowerCase()))
  //   dispatch(searchTodo(filteredAssetsData));
  //   },[searchTerm])
useEffect(()=>{
    //  console.log('useeffect');
     console.log(selectedAssets);
      let filteredAssetsData = searchTerm.length === 0 ?selectedAssets:selectedAssets.filter((asset: Todo) => asset.text.toLowerCase().includes(searchTerm.toLowerCase()))
      console.log(filteredAssetsData);
      dispatch(searchTodo(filteredAssetsData));
      },[searchTerm])
//   const search=(text:string)=>{
//     let filteredAssetsData = selectedAssets.filter((asset: Todo) => asset.text.toLowerCase().includes(searchTerm.toLowerCase()));
//     dispatch(searchTodo(filteredAssetsData));
// }
  const handleSearchChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(event.target.value);
    //  search(event.target.value);
  }
  return (
  
         <>
           <div>
          <div className='header'>
               <h1>MY TO DO APP</h1>
           </div>   
           <form className="form" >
           <input
              type="text"
               placeholder="Add Your To Do Title"
               value={toDoTitle}
               className="task-input"
               onChange={handleTitleChange}
                />
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
        </div>
    </>
    
  )
}

