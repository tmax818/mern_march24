import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div style={props.theStyle}>
    {props.theStyle.text}
    </div>
  )
}

export default Box