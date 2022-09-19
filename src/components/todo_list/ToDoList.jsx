import React, { useState} from "react";

const ToDoList =({todo, setTodo})=>{
   const handleDelete=({id})=>{
     setTodo(todo.filter((todo)=>todo.id !== id));
   }
   const [isShown, setIsShown]=useState(false);
   
    return(
        <div>
            {todo.map((todo)=>
            <li className="todo-list" key={todo.id}>
                <input type="text"
                 value={todo.title} 
                 className="list"
                 onChange={(event)=> event.preventDefault()}/>
                 <button className="button-delete task-button" 
                 onClick={()=>handleDelete(todo)}
                 onMouseEnter={()=>setIsShown(true)}
                 onMouseLeave={()=>setIsShown(false)}
                 >{isShown &&(
                    <i className ="fa fa-trash" ></i>)}
                </button>
                
            </li>)}
            
            
            

        </div>
    )
}
export default ToDoList;