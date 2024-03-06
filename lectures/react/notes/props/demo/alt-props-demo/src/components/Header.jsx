import React from 'react'

const Header = (theProps) => {
    console.log(theProps.name)

    const date = new Date()
  return (
    <div>
        {Math.floor(Math.random()* 10 + 1)}
<br />
        {date.toString()}

        { theProps.name}
    </div>
  )
}

export default Header