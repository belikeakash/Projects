import React, { useEffect, useState } from 'react';
import './Button.css'
function Button() {
    const [key,setKey] = useState('');
    const [keyCode, setKeyCode] = useState('');
    function clicked(e) {
        console.log(e);
        setKey(e.key);
        setKeyCode(e.keyCode)
    }
    useEffect(()=> {
        window.addEventListener("keypress",clicked)
    },)
    return(
        <>
            
            <h1 className='key'> {key}</h1>
            <h4 className='key_code'>{(keyCode==='') ? `Enter Valid Key` : `Key Code is ${keyCode}`
}</h4>
        </>
    )
}

export default Button;