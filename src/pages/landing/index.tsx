/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import api from '../../services/api';
import './styles.css'
function Landing(){
    const [val1, setval1] = useState(1.000);
    const [val2, setval2] = useState(0);
    const [cur1,setcur1]=useState('AUD');
    const [cur2,setcur2]=useState('AUD');
    const [currencies,setcurrencies]=useState<Array<JSX.Element>>([]);

    useEffect(()=>{
        console.log("Landing -> val1", val1)
        console.log("Landing -> val2", val2)
        console.log("Landing -> cur1", cur1)
        console.log("Landing -> cur2", cur2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[val2,currencies,cur1,cur2])
    useEffect(()=>{
       
            convert();
       
        
    },[val1])
   
    useEffect(()=>{
        getcurrencies();
    },[])
    function handleChangeCurrency_1(e:React.MouseEvent<HTMLSelectElement, MouseEvent>){
        setcur1(e.currentTarget.value);
    }
    function handleChangeCurrency_2(e:React.MouseEvent<HTMLSelectElement, MouseEvent>){
        setcur2(e.currentTarget.value);
    }
     async function convert() {
        // const response= await api.get('latest?amount=10&from=GBP&to=USD'); 
        try{
         const response= await api.get('latest?amount='+val1.toString()+'&from=GBP&to=USD'); 
         console.log(Object.values(response.data.rates)[0])
         setval2(Object.values(response.data.rates)[0] as number)
        }catch(e){
            alert("Valor inserido inválido");
        }
         
     }
     async function getcurrencies(){
        const response= await api.get('currencies');
        console.log(response.data)
        const array:Array<JSX.Element>=[];
        
        for(const [key, value] of Object.entries(response.data)) {  
            array.push(<option key={key} value={key}>{value as string}</option>)  
        }  
       setcurrencies(array);    
     }
    return(
        <div className="page">
            <div className="header">
                <img className="imagem" src={require("../../assets/images/currency_exchange_100px.png")} alt="coin"/>
                <h1 className="titulo">Convert Currency</h1>
                <img className="imagem" src={require("../../assets/images/currency_exchange_euro.png")} alt="coin"/>
            </div>
            <div className="body">
                <Input click={handleChangeCurrency_1} currencies={currencies} label="From" onChange={(e)=>{setval1(parseInt(e.target.value))}} value={val1}/>
                <button className="button">
                    <img className="imagem" src={require("../../assets/images/switch.png")} alt="coin" onClick={convert}/>
                </button>
                <Input click={handleChangeCurrency_2} currencies={currencies} label="To" onChange={(e)=>{setval2(parseInt(e.target.value))}} value={val2}/>
            </div>
       </div> 
    )
}
export default Landing