import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Home from './components/Home';
import './App.css'
import ParamPath from './components/ParamPath';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/:text' element={<ParamPath/>} />
      <Route path='/:text/:color' element={<ParamPath/>} />
      <Route path='/:text/:color/:background' element={<ParamPath/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
