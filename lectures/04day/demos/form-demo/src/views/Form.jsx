import {useState} from 'react'

const Form = () => {
    const [title, setTitle]= useState("");
    const [description, setDescription] = useState("");
    const [isSubitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState("")

    const handleSubmit = e =>
    {
        e.preventDefault();
        console.log(e)
        setIsSubmitted(true)
    }

    const handleErrors= s =>{}
    
  return (


    <div>
        <h3>{ isSubitted ? "Thanks": "Dude, fill out the form!!!"}</h3>
        <form onSubmit={handleSubmit} >
            title:<input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            <p>
            {title.length < 2 ? "too short": null}
            </p>
            description:<input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
            <br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form;