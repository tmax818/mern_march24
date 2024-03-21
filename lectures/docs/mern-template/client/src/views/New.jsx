
import handleNew from '../hooks/handleNew';
import Form from '../components/Form';


const New = () => {

  const {change, reset, modifyThing, thing, errors, formErrors} = handleNew()


  return (
    <div>
      <h3>Create a Thing</h3>

      <Form thing={thing} change={change} modifyThing={modifyThing} reset={reset}
      errors={errors} formErrors={formErrors} />
    </div>
  )
}

export default New