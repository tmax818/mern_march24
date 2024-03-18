import { useReducer } from 'react';
import {reducer, initState, formActions} from '../helpers'
import { createThing } from '../services/ThingService';


const {SET_boolean_PROPERTY, 
  SET_number_PROPERTY, 
  SET_STRING_PROPERTY} = formActions


const NewReducer = () => {
    const [things, dispatch ] = useReducer(reducer, initState);
        console.log(things)

        const handleString = e => {dispatch({type: SET_STRING_PROPERTY, payload: e.target.value})}
        const handlenumber = e => {dispatch({type: SET_number_PROPERTY, payload: e.target.value})}
        const handleboolean = e => {dispatch({type: SET_boolean_PROPERTY, payload: e.target.checked})}

        const handleSubmit = e => {
          e.preventDefault();
          createThing(things)
            .then(res => {
              console.log(res)
            })

        }


  return (
    <div>NewReducer
      <form onSubmit={handleSubmit}>
        <div>
          String: <input type="text" name="" onChange={e => handleString(e)} value={things.stringProperty}/><br/>
          number: <input type="number" name="" onChange={e => handlenumber(e)} value={things.numberProperty}/><br/>
          boolean: <input type="checkbox" name="" onChange={e => handleboolean(e)} checked={things.booleanProperty}/><br/>

          <input type="submit" value="submit with reducer" />
        </div>
      </form>
    </div>
  )
}

export default NewReducer