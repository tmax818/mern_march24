import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { defaultThing } from '../helpers';
import {updateThing, getOneThing} from '../services/ThingService'


export default () => {
    const [thing, setThing] = useState(defaultThing)
    const [errors, setErrors] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        getOneThing(id)
        .then(res => {
          console.log(res)
          setThing(res);
        })
      }, [])

    const change = e => {
        setThing(prev => ({...thing, [e.target.name]: e.target.value, booleanProperty: e.target.checked}))
        if(e.target.value.length < 2 || e.target.value < 10){
          setFormErrors({...formErrors, [e.target.name]: `${e.target.name} is too short`})
        } else {setFormErrors(null)}
      }
      
      const reset = () => {
        setThing(defaultThing)
      }
      
      const modifyThing = thing => {
        updateThing(id, thing)
          .then(res => {
            console.log(res)
            setErrors(null)
            navigate("/things")
          })
          .catch(err => {
            console.log(err)
            setErrors(err.response.data.errors)
          })
      }

      return {change, reset, modifyThing, thing, errors, formErrors }
    
}