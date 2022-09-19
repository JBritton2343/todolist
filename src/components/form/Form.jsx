import React from "react";
import {v4 as uuidV4} from "uuid";

const Form = ({input,setInput, todo, setTodo})=>{
    const onInputChange =(event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit =(event)=>{
        event.preventDefault();
        setTodo([...todo, {id: uuidV4(), title: input, completed: false}]);
        setInput("")
    }

    return(
        <form>
            <input 
            type="text" 
            placeholder="Enter an Item" 
            className="task-input" 
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="confirm" type="submit">
                Confirm
            </button>
        </form>
    )
}
export default Form;