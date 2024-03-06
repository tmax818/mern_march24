import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import StudentCard from './components/StudentCard'

const students = [
  {name: "keshia", age: 29, isAdmin: true },
  {name: "ricky", age: 22, isAdmin: false },
  {name: "deven", age: 25, isAdmin: false },
  {name: "vitoria", age: 21, isAdmin: true },
]

function App() {
  const title = "Oriel's amazing app"
  const subTitle = "it's really good"
  const by = "Oriel Silva"


  return (
    <div style={{border: "solid 2px red", padding: "3px"}}>
      <Header theTitle={title} subTitle={subTitle} by={by}/>
      {students.map(student => (
        <StudentCard {...student} />
      ))}
    </div>
  )
}

export default App``
