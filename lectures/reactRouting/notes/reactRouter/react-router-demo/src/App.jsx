import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/" element={<Home />} />
    	<Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}
    
export default App;
