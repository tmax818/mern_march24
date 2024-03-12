import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Params from './components/Params';
import Survey from './components/Survey';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/survey" element={<Survey/>}/>
      <Route path="/:color/" element={<Params/>} />
      <Route path="/:language/:name" element={<Params/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App