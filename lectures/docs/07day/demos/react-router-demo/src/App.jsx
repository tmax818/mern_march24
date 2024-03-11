import { BrowserRouter, Route, Routes } from "react-router-dom"
import {useState, useEffect} from 'react';

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"

const App = () => {
  const [state, setState] = useState("")
  console.log(state)

  useEffect(() => {
    setState("the state")
  }, [])
  

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <h1>Browser Router Demo</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App