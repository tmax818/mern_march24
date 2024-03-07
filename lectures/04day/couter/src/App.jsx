import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const start = 42;
  console.log(useState()) 



  console.log("IM RENDERING!!!!!")

  

  return (
    <>
 <Counter start={start}/>
 <Counter start={start}/>
 <Counter start={start}/>
    </>
  )
}

export default App
