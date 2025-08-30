import { createContext, useEffect } from "react";
import { useState } from "react";




export const AppContext = createContext();


const AppContextProvider = (props) => {
    const [guitar, setGuitar] = useState("Bumblebee");
    
    const value = {
       guitar, 
       setGuitar

    }

    return (
        <AppContext.Provider value={value}> 
            {props.children}
        </AppContext.Provider>
    )

   
}

export default AppContextProvider;