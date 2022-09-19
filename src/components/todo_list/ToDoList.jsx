import React from "react";

const ToDoList =({todo, setTodo})=>{
    return(
        <div>
            {todo.map((todo)=>
            <li className="todo-list" key={todo.id}>
                <input type="text"
                 value={todo.title} 
                 className="list"
                 onChange={(event)=> event.preventDefault()}/>
            </li>)}
            <button className="button-complete task-button">
                <i className ="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
                <i className ="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button">
                <i className ="fa fa-delte"></i>
            </button>

        </div>
    )
}
export default ToDoList;