import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [activeSignup, setActiveSignup] = useState({
        signup: false,
        signin: false,
    });

    const [token,setToken] = useState();

    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        profileIMG: '',
      })

    return(
        <AppContext.Provider
            value={{
                activeSignup,
                setActiveSignup,
                profile,
                setProfile,
                token,
                setToken,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}