import './App.css'
import Header from './components/Header'


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

  console.log(students)

  return (
    <div>
      <Header theTitle={title} subTitle={subTitle} by={by}/>

    </div>
  )
}

export default App
