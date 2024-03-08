import {useState} from 'react'

export const Form = ({setRecipes}) => {



    //! local form state
    const [title, setTitle]= useState("");
    const [titleErrors, setTitleErrors] = useState("")
    const [description, setDescription] = useState("");
    const [descriptionErrors, setDescriptionErrors] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [recipe, setRecipe] = useState({title: "", description: ""})
    console.log(title)
    console.log(description)
    console.log(recipe)


    const handleSubmit = e =>
    {
        e.preventDefault();
        const newRecipe ={title: title, description: description}
        console.log(newRecipe, recipe)
        setRecipes(prev => ([...prev, recipe ]))
        setIsSubmitted(true)
        setDescription("")
        setTitle("")
    }

    const handleNewTitle = (e) => {
      // setTitle(e.target.value)
      const title = e.target.value;
      const errors = title.length < 2 ? "too short": null
      setRecipe({...recipe, title: title})
      // if(e.target.value.length < 2){
      //   setTitleErrors("title be two chars")
      // } else {
      //   setTitleErrors("")
      // }
    }
    
    const handleDescription = (e) => {
      // setDescription(e.target.value)
      setRecipe({...recipe, description: e.target.value})
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
            title:<input type="text" name="title" onChange={handleNewTitle} value={recipe.title} />
            <p>
       
            </p>
            description:<input type="text" name="description" onChange={handleDescription} value={recipe.description} />
            <p style={{color: "red"}}>
           
              </p>
            <br />
            <input type="submit" value="submit" />
        </form>


    </div>
  )
}

export default Form;