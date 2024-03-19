import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const EditRecipe = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    console.log(useParams())

    const {id} =useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then(res => {
                console.log(res.data.title)
                setTitle(res.data.title)
                setDescription(res.data.description)
      
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, description)
        axios.put(`http://localhost:8000/api/recipes/${id}`,{title: title, description: description} )
        .then(res => {
          console.log(res)
          navigate('/')
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    
        setDescription("")
        setTitle("")
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    title: <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} value={title} />
                    <p>{ errors.title ? errors.title.message: ""}</p>
                </div>
                <div>
                    description: <input type="text" name="description" id="" onChange={e => setDescription(e.target.value)} value={description} />
                    <p>{ errors.description && errors.title.message}</p>
                </div>

                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default EditRecipe