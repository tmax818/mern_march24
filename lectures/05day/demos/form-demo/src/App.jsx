import { useState } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Form from './components/Form'
import Display from './components/Display'

import './App.css'
import Surprise from './components/Surprise'

function App() {
  const [recipes, setRecipes] =useState([])
  console.log(recipes)

  const title = "This is Title"

  const handleDelete = delIdx => {
    console.log(delIdx )
    const newFilteredArray = recipes.filter((recipe, idx) => delIdx !== idx )
    console.log(newFilteredArray)
    setRecipes(newFilteredArray)
  }


  return (
    <>
  <Header>
    <Title title={title}/>
    {Math.floor(Math.random()* 10 + 1) % 2 ? <Surprise/> : null}
  </Header>


  <Form  setRecipes={setRecipes}/>
  <Display recipes={recipes} handleDelete={handleDelete} />
    </>
  )
}

export default App
