import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div>
        <h1>
        {recipe.title}
        </h1>
        <p>{recipe.description}</p>
        </div>
  )
}

export default RecipeCard