import React, { useState, useContext } from 'react'
import { Layout, Input, Button } from '../components/'
import { IconDash } from './icon-dash'
import {
    Link,
} from "react-router-dom";
import { useFirebase } from '../firebase'

const Login = () => {
    const { auth, firestore } = useFirebase();

    const Sign_In = () => {
        auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            alert(errorMessage);
            

          }).then((auth) => {
              alert(auth.user.uid)
              alert('logged in');
              window.location.href = '/'
          })
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    

    return (
        <Layout>
            <div className='flex-center'>
                
                <div className='font-lobster c-primary fs-56 lh-70 flex justify-center mb-40 mt-120 flex-col items-center'>
                    <IconDash/>
                    Boginoo
                </div>
                
                <h2 className='c-primary font-ubuntu'>Нэвтрэх</h2>

                <div>
                    <h2 className='fs-16'>Цахим хаяг</h2>
                    <Input className="h-40 w-350 c-primary fs-20" onChange = {(e) => {setEmail(e.target.value)}} placeholder="name@mail.domain" />
                </div>

                <div className='mt-30'>
                    <h2 className='fs-16'>Нууц үг</h2>
                    <Input className="h-40 w-350 c-primary fs-20" type = 'password' onChange = {(e) => {setPass(e.target.value)}} placeholder="••••••••••" />
                </div>

                <div className='justify-between flex-row w-350 mt-20'>
                    <h2 className='c-primary fs-16'>Намайг сана</h2>
                    <h2 className='fs-16'>
                        <Link to='/forgotpass'>Нууц үгээ мартсан</Link>
                    </h2>
                </div>

                <Button className="font-ubuntu fs-20 lh-23 bold c-default h-32 w-350 ph-16 mt-20 b-primary rb" onClick = {Sign_In}>Нэвтрэх</Button>

                <h2 className='c-primary fs-16'>
                    <Link to='/register'>Шинэ хэрэглэгч бол энд дарна уу?</Link>
                </h2>
            </div>
        </Layout>
    )
}

export default Login;


// Шинэ хэрэглэгч бол энд дарна уу?