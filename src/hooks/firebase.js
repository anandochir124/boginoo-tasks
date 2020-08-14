import firebase from 'firebase';
import  {useState, useEffect} from 'react'

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
    const [state, setState] = useState({ firebase });

    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);

        setState({firebase, firestore, app, auth})

    }, []);

    return state;
}

export const useDoc = (path) => {
    const { firestore } = useFirebase();
    const [data, setData] = useState(null);

    useEffect(() => {
        if(firestore) {
            const unsubscribe = firestore.doc(path).onSnapshot((doc) => {
                setData(doc.data());
            });

            return () => unsubscribe();
        }
    }, [firestore, path])

    const updateRecord = (data) => {
        return firestore.doc(path).set(
            { ...data }, { merge: true }
        )
    }

    const deleteRecord = (path) => {
        return firestore.doc(path).delete();
    }


    return {data, updateRecord, deleteRecord}
}

export const useCol = (path) => {
    console.log("path = ", path)

    const { firestore } = useFirebase();
    const [data, setData] = useState([]);

    useEffect(() => {
        if(firestore && path) {
            const unsubscribe = firestore.collection(path).onSnapshot((querySnapshot) => {
                setData(querySnapshot.docs.map((doc) => doc.data()))
            })

            console.log(data);
            // .onSnapshot((doc) => {
            //     setData(doc.data());
            // });

            return () => unsubscribe();
        }
    }, [firestore, path])

    const updateRecord = (id, data) => {
        console.log(id)
        if (firestore)
            return firestore.collection(path).doc(id).set(
                {
                    ...data
                },
                {
                    merge: true
                },
            )
        else
            return null
    }

    const createRecord = (id, data) => {
        return firestore.collection(path).doc(id).set(
            {
                ...data
            }
        )
    }

    const deleteRecord = (id) => {
        return firestore.collection(path).doc(id).delete();
    }


    return {data, updateRecord, deleteRecord, createRecord}
}

  