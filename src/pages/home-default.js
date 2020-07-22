import React, { useContext, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import {
    Link,
    useHistory
} from "react-router-dom";
import AuthContext from '../providers/Provider'
import { useFirebase } from '../firebase'

export const HomeDefault = () => {
    const test = useContext(AuthContext);
    console.log(test);
    const [sh, setSh] = useState('')
    const { firestore } = useFirebase();
    const history = useHistory();

    const [urlInputState, setUrlInputState] = useState('');

    const handleChange = (event) => {
        setUrlInputState(event.target.value);
    }



    // if(user != null) {
    //     firestore.collection("users").doc(user.email.split('@')[0]).set({
    //         test: '0',
    //     });
    // }

    const Short = () => {
        if(urlInputState != '') {
            let randomString = randomStringAndNumber();
            setSh(randomString)
            firestore.collection('shortened').doc(randomString).set({
                inputUrl: urlInputState,
                outputUrl: 'https://bogi-noo.web.app/' + randomString,
            });
            history.push(`shortened?shorturl=${randomString}`);
        }
    }

    const randomStringAndNumber = () => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < 7; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 flex justify-center mb-40 flex-col items-center'>
                    <IconDash />
                    Boginoo
                </div>
                {/* <div className='logo'></div> */}
                <div className='mt-5 flex justify-center items-center'>
                    <Input value={urlInputState} onChange={handleChange} placeholder='https://www.web-huudas.mn' className='w-512 h-32 mt-8' />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-32 w-256 ph-16 mt-8 ml-16 b-primary rb" onClick={Short}>
                        Богиносгох
                    </Button>
                </div>
            </div>
        </Layout>
    )
}