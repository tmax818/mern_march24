import {useEffect} from 'react'
import axios from 'axios'

const Home = () => {

    useEffect(()=> {
        axios.get("http://localhost:8000/api/recipes")
        .then(data => console.log(data))
    }, [])
  return (
    <div>Home</div>
  )
}

export default Home