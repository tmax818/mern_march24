import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewRecipe = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, description)
    axios.post("http://localhost:8000/api/recipes",{title: title, description: description} )
    .then(res => {
      console.log(res)
      navigate('/')
    })

    setDescription("")
    setTitle("")
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          title: <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          description: <input type="text" name="description" id="" onChange={e => setDescription(e.target.value)} value={description} />
        </div>

        <input type="submit" value="submit" />

      </form>
    </div>
  )
}

export default NewRecipe;