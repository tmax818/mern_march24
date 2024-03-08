import { useState } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Form from './components/Form'
import Display from './components/Display'
import Header from './components/Header'
import SubHeader from './components/SubHeader'

import './App.css'
import Surprise from './components/Surprise'

function App() {
  const [recipes, setRecipes] =useState([])
  console.log(recipes)
<<<<<<< HEAD
=======

  const title = "This is Title"

  const handleDelete = delIdx => {
    console.log(delIdx )
    const newFilteredArray = recipes.filter((recipe, idx) => delIdx !== idx )
    console.log(newFilteredArray)
    setRecipes(newFilteredArray)
  }
>>>>>>> 91840236581da84b86357c12f66bc003400586f7


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
<<<<<<< HEAD
    <Header>
      {Math.floor(Math.random()* 10 + 1) % 2 ? <SubHeader/> : null}
      hello
      <h1>stuff</h1>
      <p>It's really good!</p>
    </Header>
  <Form  addRecipe={addRecipe}/>
=======
  <Header>
    <Title title={title}/>
    {Math.floor(Math.random()* 10 + 1) % 2 ? <Surprise/> : null}
  </Header>


  <Form  setRecipes={setRecipes}/>
>>>>>>> 91840236581da84b86357c12f66bc003400586f7
  <Display recipes={recipes} handleDelete={handleDelete} />
    </>
  )
}

export default App
