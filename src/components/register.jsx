import React, { useState } from 'react';
import { Layout, Input, Button, IconDash } from '../components'
import { useFirebase } from '../firebase'
import { useKeyPress } from '../hooks/keyPress';


const Reg = () => {
    const { auth } = useFirebase();
    let checkError = null

    const [uid, setUid] = useState(null);
    let uid2;

    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState("");
    
    const changeEmail = (e) => setEmail(e.target.value);
    const changePass = (e) => setPass(e.target.value); 
    const changeCheckPass = (e) => setCheckPass(e.target.value); 
    
    const signUp = async () => {
        
        if(checkPass !== pass) {
            alert('nuuts ug zow bish baina')
            return;
        } 

        await auth.createUserWithEmailAndPassword(email, pass)
            .then((auth) => {
                console.log(auth.user.uid);
                setUid(auth.user.uid);
                uid2 = auth.user.uid;
                console.log(uid);
            })
            .catch(function (error) {
                var errorMessage = error.message;
                checkError = 'error'
                alert(errorMessage)
            })

        if(checkError === null) {
            await auth.currentUser.sendEmailVerification().then(function () {
                alert('Email Verification Sent!');
                console.log(uid2);
                
                window.location.href = '/'
            });
        }
    }

    let enterPressed = useKeyPress('13')
    console.log(enterPressed)
    if (enterPressed == true) {
        signUp();
    }

    return (
        <Layout>
            <div className='flex-center'>

                <div className='font-lobster c-primary fs-56 lh-70 flex justify-center mb-40 mt-120 flex-col items-center'>
                    <IconDash />
                    Boginoo
                </div>

                <h2 className='c-primary font-ubuntu'>Бүртгүүлэх</h2>

                <div>
                    <h2 className='fs-16'>Цахим хаяг</h2>
                    <Input className="h-40 w-350 c-primary fs-20 ph-10" onChange = {changeEmail} placeholder="name@mail.domain" />
                </div>

                <div className='mt-30'>
                    <h2 className='fs-16'>Нууц үг</h2>
                    <Input className="h-40 w-350 c-primary fs-20 ph-10" type='password' onChange = {changePass}  placeholder="••••••••••" />
                </div>

                <div className='mt-30'>
                    <h2 className='fs-16'>Нууц үгээ давтна уу?</h2>
                    <Input className="h-40 w-350 c-primary fs-20 ph-10" type='password' onChange = {changeCheckPass} placeholder="••••••••••" />
                </div>

                <Button className="font-ubuntu fs-20 lh-23 bold c-default h-32 w-350 ph-16 mt-30 b-primary rb" onClick={signUp} >Бүртгүүлэх</Button>
            </div>
        </Layout>
    )
}

export default Reg;