import React, { useContext } from 'react';
import { Button } from './';
import {
    Link,
    useHistory
} from "react-router-dom";
import { AuthContext } from '../providers/Provider';
import { useFirebase } from '../firebase'



export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

    let History = useHistory();
    // console.log(History);
    let {user} = useContext(AuthContext);
    const { auth } = useFirebase();
    

    if(History.location.pathname == "/login" || History.location.pathname == "/register") {
        return (
            <div className='w100 flex justify-end items-center'>
                <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
                {/* <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                    <Link className='ru' to='/login'>Нэвтрэх</Link>
                </Button> */}
    
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                    <Link className='ru' to='/'>Home</Link>
                </Button>
    
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                    <Link className='ru' to='/history'>History</Link>
                </Button>
                
            </div>
        );
    }
    
    /*
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
})
    */

    const signOut = () => {
        auth.signOut();
        window.location.href = '/';
    }


    if(user != null) {
        return (
            <div className='w100 flex justify-end items-center'>
                <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb flex-col'>
                    <Link className='ru' onClick={signOut} >{user.email.split('@')[0]} </Link>
                </Button>


                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                    <Link className='ru' to='/'>Home</Link>
                </Button>

                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                    <Link className='ru' to='/history'>History</Link>
                </Button>
                
            </div>
        );
    }

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                <Link className='ru' to='/login'>Нэвтрэх</Link>
            </Button>

            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                <Link className='ru' to='/'>Home</Link>
            </Button>

            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-32 ph-16 ml-32 b-primary rb'>
                <Link className='ru' to='/history'>History</Link>
            </Button>
            
        </div>
    );
};