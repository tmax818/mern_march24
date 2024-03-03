import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [things, setThings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/things/")
      .then((res)=> {
          console.log(res.data);
          setThings(res.data);
      })
      .catch( e => console.error(e));
  }, []);




  return (
    <>
      {things.map((t,i) => (
        <div>
        <h1>{t.name}</h1>
        <Link to={`/things/${t._id}/details`}> {t.name}</Link>
        </div>
      ))}
      <Link to={"/things/new"}>new Thing</Link>
    </>
  )
}

export default Home