import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import Header from './components/Header'
import SubHeader from './components/SubHeader'

import './App.css'

function App() {
  const [recipes, setRecipes] =useState([])
  console.log(recipes)


  const handleDelete = delIdx => {
    console.log(delIdx )
    const newFilteredArray = recipes.filter((recipe, idx) => delIdx !== idx )
    console.log(newFilteredArray)
    setRecipes(newFilteredArray)
  }

  const addRecipe = newRecipe =>{
    
    setRecipes(prev => ([...prev, newRecipe ]))
  }


  
  return (
    <>
    <Header>
      {Math.floor(Math.random()* 10 + 1) % 2 ? <SubHeader/> : null}
      hello
      <h1>stuff</h1>
      <p>It's really good!</p>
    </Header>
  <Form  addRecipe={addRecipe}/>
  <Display recipes={recipes} handleDelete={handleDelete} />
    </>
  )
}

export default App
