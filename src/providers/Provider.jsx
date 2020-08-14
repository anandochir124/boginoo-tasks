import React, {createContext, useState, useEffect} from 'react';
import { useFirebase } from '../firebase';


export const AuthContext = createContext({
    user: null,
    ready: false,
    setUser: () => {},
    uid: '',
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [uid, setUid] = useState('');

    const {auth} = useFirebase();

    
    useEffect(() => {
        if(!auth) {
            return;
        }

        const subscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setReady(true);
                setUser(user);
                setUid(user.uid)
            }
        })



        return () => subscribe()
    }, [auth]);



    return (
        <AuthContext.Provider value={{user, ready, setUser, uid}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

