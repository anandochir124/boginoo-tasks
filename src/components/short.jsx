import React, { useState } from 'react';
import { Layout, Button, Input, IconDash } from '../components/';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useFirebase } from '../firebase'


const Short = () => {

    let { firestore } = useFirebase();
    let [text, setText] = useState('Copy to clipboard');

    // let inputUrl = firestore.collection('shortened').doc(randomString)

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

                    <div className='w-600 mt-100'>
                        <div>
                            <h2 className='fs-16 rm op'>Өгөгдсөн холбоос:</h2>
                            <h2 className='fs-20 rm'>https://www.web-huudas.mn</h2>
                        </div>

                        <div>
                            <div className='mt-20'>
                                <h2 className='fs-16 rm op'>Богино холбоос:</h2>
                            </div>
                            <div className='flex justify-between w-300 items-center'>
                                <h2 id='surl' className='fs-20 rm'>shortly.io/wbmn12</h2>
                                <CopyToClipboard text={'shortly.io/wbmn12'}>
                                    <div className="tooltip">
                                        <h2 className='fs-16 c-primary ul' onClick={() => { setText('Copied') }}>
                                            <span className="tooltiptext a" id="myTooltip">{text}</span>
                                            Хуулж авах
                                        </h2>
                                    </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Short;