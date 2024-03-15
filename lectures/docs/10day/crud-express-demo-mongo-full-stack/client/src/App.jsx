import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path="" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App