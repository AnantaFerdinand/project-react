//import React from 'react';
import React,{useEffect,useState} from 'react';
import axios from "axios";
import '../App.css';
import NumberFormat from 'react-number-format';

const Global = () => {
    const[confirmed, setconfirmed]=useState([]);
    const[deaths, setdeaths]=useState([]);
    const[recovered, setrecovered]=useState([]);
    <NumberFormat value={12345} displayType={'text'} thousandSeparator={true}/>
useEffect(()=>{
   axios
   .get("https://covid19.mathdro.id/api")
   .then((response)=>
   {
    setconfirmed(response.data.confirmed.value);
    setdeaths(response.data.deaths.value);
    setrecovered(response.data.recovered.value);
    console.log(confirmed,deaths,recovered);
   }).catch(errors=>{
       console.log(errors);
   })
});
return(
    <>
    <p>Jumlah Kasus Dunia</p>
    {(confirmed,deaths,recovered).items.map((item)=>{
        return(
            <Global
            confirmed={item.confirmed}
            deaths={item.deaths}
            recovered={item.recovered}
            />
        );
    })}
    </>
 );
}

export default Global;
