
import './App.css'
import GrandParent from './components/GrandParent'
import Parent from './components/Parent'

function App() {


  return (
    <>
      <GrandParent>
          <Parent/>
      </GrandParent>
    </>
  )
}

export default App
