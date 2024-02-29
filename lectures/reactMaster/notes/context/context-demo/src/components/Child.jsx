import { useContext } from "react";
import { MyContext } from "./GrandParent";
import GrandChild from "./GrandChild";

function Child() {
    const { state, setState } = useContext(MyContext);
    return (
      <div>
        <h2>Child</h2>
        <p>{state}</p>
        <button onClick={() => setState('Hello from Child')}>Change State</button>
        <GrandChild />
      </div>
    );
  }

  export default Child;