import { useContext } from "react";
import { MyContext } from "./GrandParent";

function GrandChild() {
    const { state } = useContext(MyContext);
    return (
      <div>
        <h3>GrandChild</h3>
        <p>{state}</p>
      </div>
    );
  }

  export default GrandChild;