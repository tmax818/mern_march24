import axios from 'axios'
import {useEffect, useState} from 'react'
import Card from './Card';

const Example = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {setData(res.data.results)})

    }, []);
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {data.map(d => (<Card {...d}/>))}
    </div>
  )
}

export default Example