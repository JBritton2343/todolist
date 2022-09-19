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
            <div
                onMouseOver={this.handleBoxToggle}
                className={`container${this.state.showBox ? "show":""}`}>
            <button className="button-delete task-button">
                <i className ="fa fa-trash"></i>
            </button>
            </div>

        </div>
    )
}
export default ToDoList;