import {useState} from 'react';

const MyComponent = () => {

  const [count, setCount] = useState(0);
  const [state, setState] = useState("");
  
  const handleClick = () => {
    console.log("Before setting state:", count); // Logging the current state before setting a new value
    setCount(count + 1); // Asynchronous state update
    console.log("After setting state:", count); // Logging the current state immediately after setting a new value
};

const handleChange = (e) => {
    console.log(e);
    console.log("Before setting state:", state); // Logging the current state before setting a new value
    setState(e.target.value); // Asynchronous state update
    console.log("After setting state:", state); // Logging the current state immediately after setting a new value
  }

  return (
      <>
      <button onClick={handleClick}>Increment</button>
      <input type="text" value={state} onChange={e => handleChange(e)}  />
    </>
  );
};

export default MyComponent;
