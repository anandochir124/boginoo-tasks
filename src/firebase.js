import firebase from 'firebase'
import { useEffect, useState } from 'react';


const config = {
    apiKey: "AIzaSyA6PkzBxkXFIafDrqfdnzAu8Ivs2NU-cwc",
    authDomain: "bogi-noo.firebaseapp.com",
    databaseURL: "https://bogi-noo.firebaseio.com",
    projectId: "bogi-noo",
    storageBucket: "bogi-noo.appspot.com",
    messagingSenderId: "1068985214314",
    appId: "1:1068985214314:web:f3dfa8d5a1e8166574b113",
    measurementId: "G-R2JY2TNKDM"
};


export const useFirebase = () => {
    const [state, setState] = useState({firebase});

    useEffect(() => {
        let app;
        if(!firebase.apps.length) {
            app = firebase.initializeApp(config);
        }
        const auth = firebase.auth(app);
        const firestore = firebase.firestore(app);

        setState({firebase, app, auth, firestore});
    }, [config])

    return state;
}