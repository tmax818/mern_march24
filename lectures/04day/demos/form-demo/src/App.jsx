import { useState } from 'react'
import Form from './views/Form'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(useState(0))
  console.log(count)

  return (
    <>
  <Form/>
    </>
  )
}

export default App
