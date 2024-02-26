
import './App.css'
import Person from './components/Person'

const person = {
  firstName: "Brad",
  lastName: "Knoll",
  pet: {
    name: "Louie",
    breed: "Dalmatian",
    age: 13,
    toys: ["stuffed animal", "squeaky toy", "gorilla doll"]
  }
}

function App(props) {
  console.log(person)
  return (
    <>
      App.js
      <Person person={person} />  
    </>
  )
}

export default App
