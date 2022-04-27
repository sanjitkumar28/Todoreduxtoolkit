type AddTodo = (newTodo: string) => void;
type Todo={
  text:string,
  id:string;
}
type ToggleComplete = (selectedTodo: Todo) => void;
type ClearTodo=()=>void
type TodoDelete=(id:number)=>void
type TodoEdit=(id:number,newtext:string)=>void
type TodoSearch=(text:string)=>void;
type Todosort=(sortstatus:boolean)=>void