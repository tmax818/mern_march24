import {Link} from "react-router-dom";
import {useState} from 'react';


const Home = (props) => {
  const [where, setWhere] = useState("")
  console.log(props)
  return (
    <div>
        <h1 style={{color: "red"}}>Home Component</h1>
        <Link to={"/about"}>Go to About </Link>
        <Link to={"/this"}>Go to Params </Link>
        <Link to={"/that"}>Go to that </Link>
        <Link to={`/${where}`}>Go to ... </Link>

        <input type="text" name="where" onChange={e => setWhere(e.target.value)} />

    </div>
  );
}

export default Home