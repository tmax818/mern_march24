import StateDemo from "./components/StateDemo"

const data = {
  variable: "secret",
  message: "try to change me!!",
  number: 0
}


const App = () => {
  return (
    <div>

      <img src={"./myImage.png"} alt="" width="200px"/>

      <StateDemo data={data}/>
    </div>
  )
}

export default App