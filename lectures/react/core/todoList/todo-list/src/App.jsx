import {useState} from 'react'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = td => {
    setTodos(prev => ([...prev, td]))
  }

  const toggleStatus = td => {
    const idx = todos.findIndex(t => t.title === td.title)
    console.log(idx)
    console.log(td)
    const todosCopy = [...todos]
    todosCopy[idx] = {...td, completed: !td.completed}
    setTodos(todosCopy)
  }

  const removeItem = td => {
    setTodos(prev => ([...prev.filter(t => td.title !== t.title)]))
  }



  return (  
    <div>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, i) => (
        <p style={{textDecoration: todo.completed ? "line-through": ""}} key={i}>{todo.title}
        <input id={i} type="checkbox" onChange={() => toggleStatus(todo)}/>
        <button onClick={() => removeItem(todo)}></button>
        </p>
      ))}
    </div>
  )
}

export default App
