import './App.css';
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import React, {useState} from "react";
import ToDoList from './components/todo_list/ToDoList';

function App() {
  const[input, setInput]= useState("");
  const[todo, setTodo]=useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <div>
            <Header/>
          </div>
          <div>
            <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            />
          </div>
          <div>
          {todo.length == 0 ? "List is empty" : <ToDoList todo={todo} setTodo={setTodo}/>}
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
