import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>Ricky's amazing recipes</h1>
        {props.children}
        </div>
  )
}

export default Header