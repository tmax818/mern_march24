import React from 'react'

const Card = ({name, status, species, image}) => {

  return (
    <div style={{border: "solid", margin: 10}}>

    <h3>{name}</h3>
    <img src={image} alt="" />
    <p>status: {status}</p>
    <p>species: {species}</p>
    </div>
  )
}

export default Card