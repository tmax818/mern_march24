import {useState} from 'react'

<<<<<<< HEAD
const Form = ({addRecipe}) => {
=======
export const Form = ({setRecipes}) => {
>>>>>>> 91840236581da84b86357c12f66bc003400586f7



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
<<<<<<< HEAD
        console.log(newRecipe)
        addRecipe(newRecipe)
=======
        console.log(newRecipe, recipe)
        setRecipes(prev => ([...prev, recipe ]))
>>>>>>> 91840236581da84b86357c12f66bc003400586f7
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