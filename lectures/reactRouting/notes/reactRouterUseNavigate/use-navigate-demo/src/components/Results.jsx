import {useState} from 'react'
import { useLocation } from 'react-router-dom'

const Results = () => {


    const {state} = useLocation();
    console.log(useLocation())
  return (
    <div>Results:
        <p>
        {state.name}
        </p>
        <p>
        said: {state.comment}
        </p>
    </div>
  )
}

export default Results