import {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
    const [characters, setCharacters] = useState([])
    console.log(characters)



    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => setCharacters(res.data.results))
    },[])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => console.log(data.results))
    }, [])

  return (
    <div>Home</div>
  )
}

export default Home;