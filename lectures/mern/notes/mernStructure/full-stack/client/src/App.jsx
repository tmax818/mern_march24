import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import Home from './views/Home'
import ThingDetails from './views/ThingDetails'
import ThingForm from './views/ThingForm'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/things/:id/details" element={ <ThingDetails /> }/>
      <Route path="/things/new" element={ <ThingForm /> }/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
