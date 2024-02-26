import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Events</h1>
    <button onClick={ ()=> alert("onClick Event!") }> Click to alert! </button>
      <input onChange={ ()=> alert("onChange Event!") } placeholder='Type to alert!' />

      <p>open console:</p>
      <input id="tyler" onChange={ e => console.log(e.target.id) } />
      
      <pre>
        <code>
        onFocus
        </code>
        </pre>
      <input onFocus={e => console.log(e)} onBlur={e => console.log(e)} type="text" />

    </>
  )
}

export default App
