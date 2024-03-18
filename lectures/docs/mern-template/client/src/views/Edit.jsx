import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { defaultThing } from '../helpers';
import {updateThing, getOneThing} from '../services/ThingService'

import handleEdit from '../hooks/handleEdit';
import Form from '../components/Form';


const Edit = () => {

  const {change, reset, modifyThing, thing, errors, formErrors, id } = handleEdit();
  // const [thing, setThing] = useState(defaultThing)
  // const [errors, setErrors] = useState({})
  // const [formErrors, setFormErrors] = useState({})

  // const {id} = useParams();
  // const navigate = useNavigate();
  // console.log(thing)

  // useEffect(()=> {
  //   getOneThing(id)
  //   .then(res => {
  //     console.log(res)
  //     setThing(res);
  //   })
  // }, [])
  
  // const change = e => {
  //   setThing(prev => ({...thing, [e.target.name]: e.target.value, booleanProperty: e.target.checked}))
  //   if(e.target.value.length < 2 || e.target.value < 10){
  //     setFormErrors({...formErrors, [e.target.name]: `${e.target.name} is too short`})
  //   } else {setFormErrors(null)}
  // }
  

  
  // const reset = () => {
  //   setThing(defaultThing)
  // }
  
  // const modifyThing = thing => {
  //   updateThing(id, thing)
  //     .then(res => {
  //       console.log(res)
  //       setErrors(null)
  //       navigate("/things")
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setErrors(err.response.data.errors)
  //     })
  // }

  return (
    <div>
            <Form thing={thing} change={change} modifyThing={modifyThing} reset={reset} errors={errors} formErrors={formErrors}/>
    </div>
  )
}

export default Edit;