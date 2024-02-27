import { useState } from 'react'

import './App.css'
import BoxForm from './Components/BoxForm'
import Box from './Components/Box'
import BoxContainer from './Components/BoxContainer'

function App() {
  const [boxes, setBoxes] = useState([])

  const addBox= (box) => {
    setBoxes(prevBoxes =>([...prevBoxes, box]))
  }

  return (
    <>
      <BoxForm addBox={addBox} />
      <BoxContainer boxes={boxes}/>
    </>
  )
}

export default App
