import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token'))


    const storeTokenInLs = (serverToken) =>{
    
        return localStorage.setItem('token',serverToken)
    }

    let isLoggedIn = !!token

    // Logout User 
    const LogoutUser = () =>{
        setToken("")
        return localStorage.removeItem('token')
    }

    const userInfo = {
        storeTokenInLs,
        LogoutUser,
        isLoggedIn
    }
return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
)
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue
}

export default AuthProvider;