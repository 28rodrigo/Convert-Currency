import React, { InputHTMLAttributes} from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    currencies:object,
    click:Function
}


const Input:React.FC<InputProps> =({currencies,label, click,...rest})=>{
    function handleClick(){
        console.log(currencies)
    }
    
    return(
        <>
        
        <div className="input-block">
            <label htmlFor="fname">{label}</label>
            <select id="currencies" name="currencies"  onClick={(e)=>click(e)}>
                {currencies}
             </select>
             <input type='number' step='0.01' value='1.00' placeholder='0.00' {...rest}></input>
        </div>

    </>
    );                
}

export default Input;