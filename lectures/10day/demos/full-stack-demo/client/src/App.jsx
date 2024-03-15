import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import ShowRecipe from './views/ShowRecipe'
import NewRecipe from './views/NewRecipe'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/show/:id" element={<ShowRecipe />}/>
      <Route path="/new" element={<NewRecipe />}/>
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App