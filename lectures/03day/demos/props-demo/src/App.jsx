import './App.css'
import Header from './components/Header'

function App() {
  const title = "Oriel's amazing app"
  const subTitle = "it's really good"
  const by = "Oriel Silva"

  return (
    <div id="theId">
      <Header theTitle={title} subTitle={subTitle} by={by}  />

    </div>
  )
}

export default App
