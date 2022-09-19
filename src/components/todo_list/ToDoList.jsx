import React from "react";

const ToDo_List =({todo, setTodo})=>{
    return(
        <div>
            {todo.map((todo)=>
            <li className="list-item" key={todo-list}>
                <input type="text"
                 value={todo.title} 
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
export default ToDo_List;