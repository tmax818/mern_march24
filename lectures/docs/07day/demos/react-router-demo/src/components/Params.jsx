import { useParams } from "react-router-dom"

const Params = () => {
    const {param} = useParams()
    console.log(useParams())
  return (
    <div style={{backgroundColor: param === "red" ? param : null}}>
        { useParams().param}
        </div>
  )
}

export default Params