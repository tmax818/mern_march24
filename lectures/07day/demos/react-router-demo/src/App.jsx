import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Params from './components/Params';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/params/:name" element={<Params/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App