import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ThingForm = () => {
    const [newThing, setNewThing] = useState("test");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/things", {name: newThing})
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
    }
  return (
    <>
    
    <form onSubmit={handleSubmit}>

        <input type="text" onChange={(e) => setNewThing(e.target.value)} value={newThing}/>

        <input type="submit" value="create" />
    </form>
    </>
  )
}

export default ThingForm