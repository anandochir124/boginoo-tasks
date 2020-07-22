import React, {createContext, useContext, useState, useEffect} from 'react';
import { useFirebase } from '../firebase';


export const AuthContext = createContext({
    user: null,
    ready: false,
    setUser: () => {},
    // auth: firebase.auth(app),
    // firestore: firebase.firestore(app),
    url: ''
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    const {auth} = useFirebase();

    
    useEffect(() => {
        if(!auth) {
            return;
        }

        const subscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setReady(true);
                setUser(user);
            }
        })



        return () => subscribe()
    }, [auth]);



    return (
        <AuthContext.Provider value={{user, ready, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

