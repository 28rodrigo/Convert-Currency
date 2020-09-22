
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import api from '../../services/api';
import './styles.css'
function Landing(){
    const [val1, setval1] = useState(0);
    const [val2, setval2] = useState(0);
    const [currencies,setcurrencies]=useState<Array<JSX.Element>>([]);

    useEffect(()=>{
        console.log("Landing -> val1", val1)
        console.log("Landing -> val2", val2)
        console.log("Landing -> currencies", currencies)
    },[val1,val2,currencies])
   
    useEffect(()=>{
        getcurrencies();
    },[])
     async function convert() {
        
         //const response= await api.get('latest?amount=10&from=GBP&to=USD');
         const response= await api.get('currencies');
         console.log(response.data)
     }
     async function getcurrencies(){
        const response= await api.get('currencies');
        console.log(response.data)
        const array:Array<JSX.Element>=[];
        for(const [key, value] of Object.entries(response.data)) {
            
            array.push(<option key={key} value={key}>{value as string}</option>)
            
          }
          console.log("getcurrencies -> array", array)
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
                <Input currencies={currencies} label="From" onChange={(e)=>{setval1(parseInt(e.target.value))}} value={val1}/>
                <button className="button">
                    <img className="imagem" src={require("../../assets/images/switch.png")} alt="coin" onClick={convert}/>
                </button>
                <Input currencies={currencies} label="To" onChange={(e)=>{setval2(parseInt(e.target.value))}} value={val2}/>
            </div>
       </div> 
    )
}
export default Landing