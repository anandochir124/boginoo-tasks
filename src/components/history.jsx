import React, { useContext } from 'react';
import { Layout, Button, Input, IconDash} from '../components/';
import { useFirebase } from '../firebase';
import {AuthContext} from '../providers/Provider'
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCol } from '../hooks/firebase';

const History = () => {
    const [text, setText] = useState('Copy to clipboard');
    let { firestore } = useFirebase();
    const { user } = useContext(AuthContext);

    const [path, setPath] = useState(null);

    console.log(path)

    const { data: urls } = useCol(path);

    useEffect(() => {
        if(firestore && user) {

            setPath(`users/${user.email.split('@')[0]}/history`)
            // firestore.collection("users").doc(user.email.split('@')[0]).collection('history').get().then((querySnapshot) => {
            //     setUrls(querySnapshot.docs.map((doc) => doc.data()))
            // });

            // data.map(({url}, indx) => {
            //     setUrls(url);
            //     console.log(url)
            // })
        }
    }, [firestore, user, path]);

    

    


    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='font-lobster c-primary fs-56 lh-70 flex justify-center mb-40 flex-col items-center'>
                    <IconDash />
                    Boginoo
                </div>

                <div className='flex-col flex-center'>
                    <div className='w-600 mt-5 flex justify-center items-center'>
                        <Input placeholder='https://www.web-huudas.mn' className='w-400 h-32 mt-8' />
                        <Button className="font-ubuntu fs-20 lh-23 bold c-default h-32 w-200 ph-16 mt-8 ml-16 b-primary rb" >Богиносгох</Button>
                    </div>

                    <h2 className='c-primary font-ubuntu justify-start flex w-600 mt-40'>Түүх</h2>
                    {urls && 
                        urls.map((i) => {
                            return (
                                <div className='w-600 flex-row items-center mb-30 justify-between bb-1'>
                                    <div>
                                        <h2 className='fs-16 rm op'>Өгөгдсөн холбоос:</h2>
                                        <h2 className='fs-20 rm'>{i.inputUrl}</h2>
                                    </div>
            
                                    <div className=''>
                                        <h2 className='fs-16 rm op'>Богино холбоос:</h2>
                                        <h2 className='fs-20 rm'>{i.outputUrl}</h2>
                                    </div>
                                    <CopyToClipboard text={i.outputUrl}>
                                        <div className="tooltip">
                                            <h2 className='fs-16 c-primary ul' onClick={() => { setText('Copied') }}>
                                                <span className="tooltiptext a" id="myTooltip">{text}</span>
                                                Хуулж авах
                                            </h2>
                                        </div>
                                    </CopyToClipboard>
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
        </Layout>
    )
}

export default History;