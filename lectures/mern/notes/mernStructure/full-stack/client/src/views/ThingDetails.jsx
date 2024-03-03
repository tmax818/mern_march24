import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ThingDetails = () => {
    const [thing, setThing] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id)

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/things/${id}`)
            .then(res => {
                console.log(res.data);
                setThing(res.data);
                console.log(thing.name)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const deleteBook = () => {
        axios.delete(`http://localhost:8000/api/things/${id}`)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
    }

  return (
    <div>
        {thing && thing.name}
        <button onClick={deleteBook}>Delete</button>
        </div>
  )
}

export default ThingDetails