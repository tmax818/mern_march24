import {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    console.log(recipes)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipes")
        .then(res => setRecipes(res.data))
    }, [])


  return (
    <div>
        <h1>recipes</h1>
        {recipes.map((recipe, idx) =>{
            return(
                <div>
                    <h3>{recipe.title}</h3>
                </div>
            )
            console.log(recipe.title)
        })}
    </div>
  )
}

export default Home