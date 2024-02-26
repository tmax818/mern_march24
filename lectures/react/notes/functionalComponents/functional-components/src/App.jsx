import './App.css'

import Header from './components/Header';

function App() {
  const stringVar = "I'm a string!";
  const numberVar = 43110;
  const objectVar = {
    propertyKey: "property value",
    vegetable: "cucumber"
  }
  const arrVar = ["index 0", "index 1"]
  const {propertyKey, vegetable} = objectVar;
  const [firstValue, secondValue] = arrVar;
  return (
    <>
    <Header/>
      <p>{stringVar}</p>
      <p>{numberVar}</p>
      <p>{objectVar.propertyKey}</p>
      <p>{objectVar.vegetable}</p>
      <p>{arrVar[0]}</p>
      <p>{arrVar[1]} </p>

    <h2>After refactor</h2>
      <p>{stringVar}</p>
      <p>{numberVar}</p>
      <p>{propertyKey}</p>
      <p>{vegetable}</p>
      <p>{firstValue}</p>
      <p>{secondValue}</p>
    </>
  )
}
export default App

