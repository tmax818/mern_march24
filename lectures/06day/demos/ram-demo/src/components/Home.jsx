import {useEffect, useState} from 'react';
import CharCard from './CharCard';
import axios from 'axios';

const Home = () => {
    const [characters, setCharacters] = useState([])
    console.log(characters)

    // useEffect(()=>{
    //     fetch("https://rickandmortyapi.com/api/character")
    //     .then(res => res.json())
    //     .then(data => setCharacters(data.results))

    // },[]) 

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => setCharacters(res.data.results))
       

    },[])



  return (
    <div>
        {characters.map(char => (

            <CharCard char={char} />
        ))}
    </div>
  )
}

export default Home