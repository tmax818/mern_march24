import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
  <div style={props.theStyle}>
    {props.myAmazingText}
    </div>
  )
}

export default Box