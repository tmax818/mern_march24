import NavbarContext from './context/navbar'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'

const App = () => {
  return (
    <>
      <NavbarContext>
        <Navbar />
        <FormWrapper />
      </NavbarContext>
    </>
  )
}

export default App