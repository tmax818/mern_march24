import {useState} from 'react'

function TodoForm({addTodo}) {

  const [item, setItem] = useState({title: "", completed: false});

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(item);
    setItem({title: "", completed: false})

  }

  return (
    <div>

      <form onSubmit={(e) => handleSubmit(e)}>

        <input type="text" onChange={(e) => setItem(prev => ({...prev, title: e.target.value}))} value={item.title}/>
        <input type="submit" value="add todo" />
      </form>

    
    </div>
  )
}

export default TodoForm;