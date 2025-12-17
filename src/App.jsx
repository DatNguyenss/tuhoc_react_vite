import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {
  
  const [todoList, setTodoList] = useState([
      {id:1,nam: "Learning React "},
      {id: 2, name: "Watching Youtube"}

  ])

  const hoidanid = "Erich";
  const age=25;
  const data={
    address:"hanoi",
    country:"vietnam"
  }

const addNewTodo=()=>{
  alert("call me")
}

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
      addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanid}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
    <img
      src={reactLogo}
      className="logo react"
      alt="React logo"
    />
  </div>

    </div>
  )
}

export default App
