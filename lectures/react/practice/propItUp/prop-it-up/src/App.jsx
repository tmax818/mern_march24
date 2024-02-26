
import './App.css'

import PersonCard from './components/PersonCard'

import {people} from './people'

function App() {

  console.log(people)
  return (
    <>
    {/* <PersonCard firstName="Tyler" lastName="Maxwell" hairColor="bald" age={39}/> */}
    {people.map(person => {
      return(
        <PersonCard firstName={person.firstName} lastName={person.lastName} hairColor={person.hairColor} age={person.age}/>
      )
    })}
    </>
  )
}

export default App
