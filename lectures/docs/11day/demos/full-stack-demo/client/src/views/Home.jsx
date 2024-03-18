import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    console.log(recipes)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipes")
        .then(res => setRecipes(res.data))
    }, [])

    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/recipes/${id}`)
          .then(res => {
            console.log(res);
            const filteredRecipe = recipes.filter(r => r._id != id)
            setRecipes(filteredRecipe)
          })
    }


  return (
    <div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">actions</th>

    </tr>
  </thead>
  <tbody>
    {recipes.map(recipe => (
    <tr>
      <th scope="row">{recipe._id}</th>
      <td>
        <Link to={`/show/${recipe._id}`}>
        {recipe.title}
        </Link>
        </td>
      <td>{recipe.description}</td>
      <td>
        <Link to={`/edit/${recipe._id}`} >edit</Link>
        <button onClick={() => handleDelete(recipe._id)}>delete</button>
      </td>

    </tr>
    ))}

  </tbody>
</table>
    </div>
  )
}

export default Home