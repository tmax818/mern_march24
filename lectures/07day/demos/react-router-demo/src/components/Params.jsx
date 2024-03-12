import { useParams } from "react-router-dom"

const Params = () => {
    console.log(useParams())
    const {name } = useParams()
  return (
    <div>{`Welcome to React, ${name}`}</div>
  )
}

export default Params