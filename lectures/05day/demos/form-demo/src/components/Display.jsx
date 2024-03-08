import {useState} from 'react'

const Display = ({recipes, handleDelete}) => {


  

  
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