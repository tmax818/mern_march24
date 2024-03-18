import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { defaultThing } from '../helpers';
import {createThing} from '../services/ThingService'

export default () => {
    const [thing, setThing] = useState(defaultThing)
    const [errors, setErrors] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const navigate = useNavigate();
    console.log(errors)
    console.log(thing)
    console.log(formErrors)

    const change = e => {
        setThing(prev => ({...thing, [e.target.name]: e.target.value, booleanProperty: e.target.checked}))
        if(e.target.value.length < 2 || e.target.value < 10){
          setFormErrors({...formErrors, [e.target.name]: `${e.target.name} is too short`})
        } else {setFormErrors(null)}
      }

      const reset = () => {
        setThing({stringProperty: "", numberProperty: 0, booleanProperty: false})
      }
    
      const modifyThing = thing => {
        createThing(thing)
          .then(res => {
            setErrors(null)
            navigate("/things")
            
          })
          .catch(err => {
            console.log(err)
            setErrors(err.response.data.errors)
          })
      }
    

      return {change, reset, modifyThing, thing, errors, formErrors}
}