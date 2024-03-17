

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
            StringProperty: <input type="text" className="form-control" name={"StringProperty"} value={thing.StringProperty} onChange={e => change(e)} />
            <p style={{color: 'red'}}> 
            {errors.StringProperty && errors.StringProperty.message}
            {formErrors && formErrors.StringProperty}
            </p>
            </div>

            <div>
            NumberProperty: <input type="number" className="form-control" name={"NumberProperty"} value={thing.NumberProperty} onChange={e => change(e)} />
               <p style={{color: 'red'}}> 
               {errors.NumberProperty && errors.NumberProperty.message}
                {formErrors && formErrors.NumberProperty}
               
               </p>
            </div>


            <hr />
            BooleanProperty: <input type="checkbox" name="BooleanProperty" checked={thing.BooleanProperty} onChange={e => change(e) } />

            <div>
            <input type="submit" value="create thing" />
            </div>
        </form>
    </div>
  )
}

export default Form