import { useRef, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])
window.localStorage.setItem("todos", JSON.stringify(todos))
  return (
    <>
    <TodoForm todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </> 
  )
}

export default App
