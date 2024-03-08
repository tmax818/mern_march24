import {useState} from 'react'

const Form = ({setRecipes}) => {



    //! local form state
    const [title, setTitle]= useState("");
    const [titleErrors, setTitleErrors] = useState("")
    const [description, setDescription] = useState("");
    const [descriptionErrors, setDescriptionErrors] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    console.log(title)
    console.log(description)


    const handleSubmit = e =>
    {
        e.preventDefault();
        const newRecipe ={title: title, description: description}
        console.log(newRecipe)
        setRecipes(prev => ([...prev, newRecipe ]))
        setIsSubmitted(true)
        setDescription("")
        setTitle("")
    }

    const handleNewTitle = (e) => {
      setTitle(e.target.value)
      if(e.target.value.length < 2){
        setTitleErrors("title be two chars")
      } else {
        setTitleErrors("")
      }
    }
    
    const handleDescription = (e) => {
      setDescription(e.target.value)
      if(e.target.value.length < 3){
        setDescriptionErrors("description be three chars")
      } else {
        setDescriptionErrors("")
      }
      
    
    }
    
  return (
    <div>
        <h3>{ isSubmitted ? "Thanks": "Dude, fill out the form!!!"}</h3>
        {/* //! rendering a form */}
        <form onSubmit={handleSubmit} >
            title:<input type="text" name="title" onChange={handleNewTitle} value={title} />
            <p>
            {titleErrors}
            </p>
            description:<input type="text" name="description" onChange={handleDescription} value={description} />
            <p style={{color: "red"}}>{descriptionErrors} </p>
            <br />
            <input type="submit" value="submit" />
        </form>
        {/* // ! render a list of recipes */}

    </div>
  )
}

export default Form;