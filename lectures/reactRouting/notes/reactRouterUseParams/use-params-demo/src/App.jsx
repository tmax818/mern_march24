import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
    
import Location from "./components/Location";
    
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;



