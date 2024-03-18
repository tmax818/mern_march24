import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import RecipeCard from '../components/RecipeCard'

const ShowRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    console.log(recipe)


    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then(res => {
                console.log(res.data)
                setRecipe(res.data)
            })
    }, [])

  return (
    <div>

        {recipe?<RecipeCard recipe={recipe}/> : "loading..." }
        {/* {recipe && <RecipeCard recipe={recipe}/> } */}
        
     
    </div>
  )
}

export default ShowRecipe