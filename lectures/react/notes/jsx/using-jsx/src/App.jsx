// import './App.css'
import Highlight from 'react-highlight';

const snippet = `
function App() {
  return (
    <>
    <h1>Hello, World</h1>
    </>
    );
}
export default App
`

function App() {
  return (
    <>
    <h1>Hello, World</h1>
    <Highlight className='javascript'>
  {snippet}
</Highlight>


    </>
    );
}
export default App
