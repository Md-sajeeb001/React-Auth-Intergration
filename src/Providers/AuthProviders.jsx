/* eslint-disable react/prop-types */
import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../components/Firebase_init";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const name = "sajeeb"

    const AuthInfo = {
        name,
        createUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;