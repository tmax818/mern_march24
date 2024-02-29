import {useContext} from 'react'
import { TheContext } from '../context/navbar'

const Navbar = () => {
  const {userName} = useContext(TheContext)
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <p>This is the Navbar</p>
      <p>
    {userName}
      </p>
    </div>
  )
}

export default Navbar