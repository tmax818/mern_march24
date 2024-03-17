import { useReducer } from 'react';
import {reducer, initState, formActions} from '../helpers'
import { createThing } from '../services/ThingService';


const {SET_BOOLEAN_PROPERTY, 
  SET_NUMBER_PROPERTY, 
  SET_STRING_PROPERTY} = formActions


const NewReducer = () => {
    const [things, dispatch ] = useReducer(reducer, initState);
        console.log(things)

        const handleString = e => {dispatch({type: SET_STRING_PROPERTY, payload: e.target.value})}
        const handleNumber = e => {dispatch({type: SET_NUMBER_PROPERTY, payload: e.target.value})}
        const handleBoolean = e => {dispatch({type: SET_BOOLEAN_PROPERTY, payload: e.target.checked})}

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
          Number: <input type="number" name="" onChange={e => handleNumber(e)} value={things.numberProperty}/><br/>
          Boolean: <input type="checkbox" name="" onChange={e => handleBoolean(e)} checked={things.BooleanProperty}/><br/>

          <input type="submit" value="submit with reducer" />
        </div>
      </form>
    </div>
  )
}

export default NewReducer