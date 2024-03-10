import {useEffect, useState} from 'react'
import CharCard from './CharCard'

const Home = () => {
    const [characters, setCharacters] = useState([])
    console.log(characters)



    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(p => p.json())
        .then(p => setCharacters(p.results))
    }, [])

  return (
    <div className="row">
      {characters.map(char => (
        <CharCard char={char}/>
      ))}
    </div>
  )
}

export default Home