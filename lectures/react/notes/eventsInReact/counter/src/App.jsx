import {useState} from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [state, setState] = useState(0)
  const [count, setCount] = useState(0)

  // useEffect(()=> {
  //   setState(prev => console.log(prev))

  // }, [])
  console.log(state)

  console.log("I have rendered")
  const logClick = () => {console.log("click")}


  return (
    <>
    <p>{state}</p>
    <p>{count}</p>
    <button onClick={() => setState(prev => prev + 1)}>increase</button>
    <button onClick={() => setCount(prev => prev + 1)}>increase Count</button>
    <button onClick={() => setState(prev => prev - 1)}>decrease</button>
    </>
  )
}

export default App
