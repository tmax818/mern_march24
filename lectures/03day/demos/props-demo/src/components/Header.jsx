import React from 'react'

const Header = ({theTitle, subTitle, by}) => {
  // const {theTitle, subTitle, by} = props
  // console.log(props)
  // theTitle = "Somthing else";
  return (
    <div>
      <h1>{theTitle}</h1>
      <h2>{subTitle}</h2>
      <p>{by}</p>
      <p>{Math.random()}</p>
    </div>
  )
}

export default Header