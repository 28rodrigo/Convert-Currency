import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    currencies:object
}


const Input:React.FC<InputProps> =({currencies,label, ...rest})=>{
    function handleClick(){
        console.log(currencies)
    }
    
    return(
        <>
        
        <div className="input-block">
            <label htmlFor="fname">{label}</label>
            <select id="country" name="country" onClick={handleClick}>
                {currencies}
             </select>
             <input type="number" {...rest}></input>
        </div>

    </>
    );                
}

export default Input;