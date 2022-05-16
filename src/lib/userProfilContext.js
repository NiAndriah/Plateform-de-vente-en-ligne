import React, { createContext, useState } from "react";

export const UserProfilContext = createContext({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfilContext: info => {}
})

const UserProfilContextProvider = ({ children }) => {
    const UserProfilState  = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        setUserProfilContext: info => 
            setUserProfil(prevState =>({
                ...prevState,
                [Object.keys(info)]: Object.values(info)[0]
            })
        )
    }
    const [userProfil, setUserProfil] = useState(UserProfilState);
    return (<UserProfilContext.Provider value={userProfil}>{ children }</UserProfilContext.Provider>)
}

export default UserProfilContextProvider;