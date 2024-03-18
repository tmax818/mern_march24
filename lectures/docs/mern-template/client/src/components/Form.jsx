

const Form = ({thing, change, reset, modifyThing, errors, formErrors}) => {


    const handleSubmit = e => {
        e.preventDefault();
        modifyThing(thing);
        reset();
    }




    return (
    <div>
        
        <form className="form" onSubmit={handleSubmit}>

            <div>
            stringProperty: <input type="text" className="form-control" name={"stringProperty"} value={thing.stringProperty} onChange={e => change(e)} />
            <p style={{color: 'red'}}> 
            {errors.stringProperty && errors.stringProperty.message}
            {formErrors && formErrors.stringProperty}
            </p>
            </div>

            <div>
            numberProperty: <input type="number" className="form-control" name={"numberProperty"} value={thing.numberProperty} onChange={e => change(e)} />
               <p style={{color: 'red'}}> 
               {errors.numberProperty && errors.numberProperty.message}
                {formErrors && formErrors.numberProperty}
               
               </p>
            </div>


            <hr />
            booleanProperty: <input type="checkbox" name="booleanProperty" checked={thing.booleanProperty} onChange={e => change(e) } />

            <div>
            <input type="submit" value="create thing" />
            </div>
        </form>
    </div>
  )
}

export default Form