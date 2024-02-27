import React from 'react'
import Box from './Box'
function BoxContainer({boxes}) {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {boxes.map(box => (<Box color={box.color} />))}
    </div>
  )
}

export default BoxContainer