import {BrowserRouter, Routes, Route} from 'react-router-dom'


import New from './views/New';
import Home from './views/Home';
import Show from './views/Show';
import Edit from './views/Edit';
import NavBar from './components/NavBar';
import NewReducer from './components/NewReducer';


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/things" element={<Home/>} />
        <Route path="/things/new" element={<New/>} />
        <Route path="/things/new/reducer" element={<NewReducer/>} />
        <Route path="/things/show/:id" element={<Show/>} />
        <Route path="/things/edit/:id" element={<Edit/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App