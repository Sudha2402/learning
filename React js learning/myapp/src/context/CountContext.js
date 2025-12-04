// UserContext.jsx
import React, { createContext, useState } from "react";

const CountContext = createContext();

function CountProvider({ children }) {

    const [countDetails, setCountDetails] = useState({
        // username: "Sudha",
        // mobile: "12-34-56-78-90",
        value: 90,
    });


    return (
        <CountContext.Provider value={countDetails}>
            {/* we ant count Details to be seen in the nested components without Props, hence we need to set this in main App.js */}

            {children}

            {/* children stores all inside code of countPrvider. */}
            {/* we simply need to useContext ( countContext )  store it into an object then , we can acccess it's different properties.  */}

            {/* for now we are trying with contact page, register page */}

        </CountContext.Provider>
    );
};


export { CountProvider, CountContext };
