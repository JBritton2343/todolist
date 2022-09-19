import './App.css';
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import React, {useState} from "react";
import ToDo_List from './components/todo_list/ToDoList';

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
            <ToDo_List/>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
