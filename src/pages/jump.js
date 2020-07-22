import React, { useContext, useState, useEffect } from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import AuthContext from '../providers/Provider'
import { useFirebase } from '../firebase'

const Jump = () => {
    let id = useHistory().location.pathname.split('/')[1];
    console.log(id);

    let { firestore } = useFirebase();

    const [url, setUrl] = useState('');

    useEffect(() => {
        if (firestore){
            firestore.collection('shortened').doc(id).get().then((doc) => {
                console.log(doc.data());
                setUrl(doc.data().inputUrl);
            })
        }
    }, [firestore]);

    if(url != '') {
    
        window.location.href = url;
    }

    return (
        <></>
    )
}

export default Jump;