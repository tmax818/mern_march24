import {useContext, useState} from 'react'
import { TheContext } from '../context/navbar'


const Form = () => {
  const [newName, setNewName] = useState("")
  const {setUserName} = useContext(TheContext);

  const handleSubmit = e => {
    e.preventDefault()
    setUserName(newName)

  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName}/>
        <input type="submit" value="change" />
      </form>
    </div>
  )
}

export default Form