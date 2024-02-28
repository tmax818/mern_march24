import { useParams } from "react-router-dom";

const ParamPath = () => {
    const {text, color, background} = useParams();

  return (
    <div style={{color, background}}>   
        {isNaN(text)? `the word is ${text}`: `the number is${text}`}
    </div>
  )
}

export default ParamPath