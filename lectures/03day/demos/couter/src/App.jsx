import { useState } from 'react'
import './App.css'

function App() {
  console.log(useState()) 
  const [state, setState] = useState(0)
  console.log(state)

  console.log("IM RENDERING!!!!!")

  

  return (
    <>
    <p>
  {state}

    </p>

  <button onClick={() => setState(prev => prev + 1)}>increase</button>
  <button onClick={() => setState(0)}>reset</button>
  <button onClick={() => setState(prev => prev - 1)}>decrease</button>
    </>
  )
}

export default App
