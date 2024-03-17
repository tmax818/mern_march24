import axios from 'axios';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {getAllThings} from '../services/ThingService'

const Home = () => {
  const [things, setThings] = useState(null);


  useEffect(() => {
    getAllThings()
      .then(res => {
        console.log(res)
        setThings(res)
      })
      .catch(err => {console.log(err)})
  }, [])


  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {things && things.map(thing => (
          <tr key={thing._id}>
          <th>
            <Link to={`/things/show/${thing._id}`}>view one</Link>
          </th>
          <td>{thing.StringProperty}</td>
          <td>{thing.NumberProperty}</td>
          <td>{thing.BooleanProperty ? "yes": "no"}</td>
          <td>
            <Link to={`/things/edit/${thing._id}`}>edit one</Link>
          </td>
        </tr>
    ))}
 
  </tbody>
</table>
    </div>
  )
}

export default Home