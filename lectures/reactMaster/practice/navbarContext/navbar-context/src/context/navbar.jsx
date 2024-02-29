import {useState, createContext} from 'react'

export const TheContext = createContext();

const NavbarContext = ({children}) => {
    const [userName, setUserName] = useState("Test")



    return(
        <TheContext.Provider value={{userName, setUserName}}>
        {children}
        </TheContext.Provider>
    )


}

export default NavbarContext;