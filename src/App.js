import React from "react";
import "./App.css";

//Component imports
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>List your To-Do's</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
