import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneThing } from '../services/ThingService';


import Loading from '../components/Loading';
import Card from '../components/Card';

const Show = () => {
  const [thing, setThing] = useState(null);
  const {id} = useParams()

  useEffect(()=>{
    getOneThing(id)
    .then(res => {
      console.log(res)
      setThing(res);
    })
  }, [])
  return (
    <div>{ thing ?  <Card thing={thing} />: <Loading/>}
    </div>
  )
}

export default Show