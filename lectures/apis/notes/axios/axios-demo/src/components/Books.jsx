import {useEffect, useState} from 'react'
import axios from 'axios'

const Books = () => {

    useEffect(()=>{
        axios.get("http://localhost:8080/api/books").then(res => console.log(res))
    }, [])
  return (
    <div>Books</div>
  )
}

export default Books