import { useParams } from "react-router-dom"

const Params = () => {
    console.log(useParams())
    const {name, language, color } = useParams()
  return (
    <div style={{color }}>{`Welcome to ${language}, ${name}`}
    <p>{`this is the single params: ${color}`}</p>
    </div>
  )
}

export default Params