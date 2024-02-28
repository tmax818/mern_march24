import { useParams } from "react-router-dom"; //Top of App.js
//Rest of imports here...
    
const Location = (props) => { 
  const { city } = useParams();
    
  return (
    <h1>Welcome to { city }!</h1>
  );
}
//Rest of code here...


export default Location