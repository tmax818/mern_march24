import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'

import './App.css'

function App() {
  const [recipes, setRecipes] =useState([])


  return (
    <>
  <Form  setRecipes={setRecipes}/>
  <Display recipes={recipes} setRecipes={setRecipes} />
    </>
  )
}

export default App
