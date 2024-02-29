

import { useState, createContext } from 'react';


export const MyContext = createContext();


function GrandParent({children}) { 
  const [state, setState] = useState('Hello from GrandParent');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}


export default GrandParent;