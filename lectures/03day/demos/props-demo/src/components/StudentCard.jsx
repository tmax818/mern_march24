import React from 'react'

const StudentCard = ({name, age, isAdmin}) => {

//    const {name, age, isAdmin} = props
   console.log(name)
   console.log(isAdmin)
  
    return (
    <div style={{border: "solid 2px blue"}}>
    <h1>{name}</h1>
    <p>age: {age}</p>
        <p>isAdmin: {isAdmin ? "yes": "no"}</p>
    </div>
  )
}

export default StudentCard