import {useRef} from "react";

const UncontrolledInput = () => {
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref)
  }

  console.log(ref)
  return (
    <form onSubmit={handleSubmit}>

    <input type="text" ref={ref}/>
    </form>
  );

};

export default UncontrolledInput;

