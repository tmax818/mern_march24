import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    console.log(recipes)
    useEffect(()=> {
        axios.get("http://localhost:8000/api/recipes")
        .then(data => setRecipes(data.data))
    }, [])
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {recipes.map((recipe, idx) => (
    <tr>
      <th scope="row">{recipe._id}</th>
      <td>{recipe.title}</td>
      <td>{recipe.description}</td>
      <td>
        <Link to={`/recipes/${recipe._id}/show`}>Show</Link>
      </td>
    </tr>
    ))}

  </tbody>
</table>
    </div>
  )
}

export default Home