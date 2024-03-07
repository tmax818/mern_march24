import {useState} from 'react';
import { displaySubmitMessage,handleInput, handleSubmit } from '../helpers';
import React from 'react'

export const Form = () => {
    const [recipe, setRecipe] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState("")

  return (
    <fieldset>
            <legend>Form.jsx</legend>
            <h3>{displaySubmitMessage(isSubmitted)}</h3>

    <form onSubmit={() => handleSubmit(e, setRecipe, setIsSubmitted)}>
        <input type="text" name="title" onChange={e => handleInput(e, setRecipe, setErrors)} value={recipe} />
        <p>{errors}</p>
        <button>submit</button>
    </form>
    </fieldset>
  )
}

export default Form;