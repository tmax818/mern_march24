import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Survey from './components/Survey'
import Results from './components/Results'
    
function App() {
    
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Survey/> }/>
      <Route path="/results" element={ <Results /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default App
