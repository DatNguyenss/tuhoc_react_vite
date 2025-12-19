import './todo.css'
import { useState } from 'react';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (id) => {
        const newList = todoList.filter(item => item.id !== id)
        setTodoList(newList)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo} />
            {todoList.length > 0 ?
                <TodoData todoList={todoList} deleteTodo={deleteTodo} />
                :
                <div className="todo-image">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </div>
            }
        </div>
    )
}

export default TodoApp;

