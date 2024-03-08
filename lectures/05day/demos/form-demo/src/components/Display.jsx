import {useState} from 'react'

const Display = ({recipes, setRecipes}) => {
  [recipes, setRecipes] = useState([])

  
  const handleDelete = delIdx => {
    console.log(delIdx )
    const newFilteredArray = recipes.filter((recipe, idx) => delIdx !== idx )
    console.log(newFilteredArray)
    setRecipes(newFilteredArray)
  }
  
  return (
    <div style={{border: "solid"}}>
    { recipes.map((recipe, idx) => {
       return (
         <div key={idx} style={{border: "solid"}}>
           <p>{recipe.title}</p>
           <p>{recipe.description}</p>
           <button onClick={() => handleDelete(idx)}>delete</button>
         </div>
       )
    })}
   </div>
  )
}

export default Display