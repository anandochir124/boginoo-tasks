import React from 'react';
import {
    useHistory
} from "react-router-dom";
import { useDoc } from '../hooks/firebase'

const Jump = () => {
    let id = useHistory().location.pathname.split('/')[1];
    console.log(id);
    
    let { data : url } = useDoc(`shortened/${id}`)
    

    if(url !== '') {
    
        window.location.href = url;
    }

    return (
        <></>
    )
}

export default Jump;