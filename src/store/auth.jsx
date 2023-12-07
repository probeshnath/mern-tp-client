import { createContext, useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const storeTokenInLs = (serverToken) =>{
        return localStorage.setItem('token',serverToken)
    }

    const userInfo = {
        storeTokenInLs
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