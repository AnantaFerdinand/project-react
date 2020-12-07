import React,{useEffect,useState} from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";
import '../App.css';


function Indonesia(){
const[confirmed, setconfirmed]=useState("");
const[deaths, setdeaths]=useState("");
const[recovered, setrecovered]=useState("");
const[perawatan, setPerawatan]=useState("");
const[jumlahKasus, setJumlahKasus]=useState("");
const[lastUpdate, setLastUpdate]=useState("");

console.log(confirmed,deaths,recovered,perawatan,jumlahKasus, lastUpdate);

useEffect(()=>{
    
       axios
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then(response=>{
        setconfirmed(response.data.confirmed.value);
        setdeaths(response.data.deaths.value);
        setrecovered(response.data.recovered.value);
        setPerawatan(response.data.perawatan.value);
        setJumlahKasus(response.data.jumlahKasus.value);
        setLastUpdate(response.data.lastUpdate.value);
    
    }).catch(error=>{
        console.log(error);
    })
 
       
},[]);


return(
    
    <div className="container"> 
    <p>Jumlah Kasus Indonesia</p>
    <h1 className="Positif">
    <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
    <p>Positif</p>
    </h1>

    <h1 className="Sembuh">
    <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
    <p>Sembuh</p>
    </h1>

    <h1 className="Meninggal">
    <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
    <p>Meninggal</p>
    </h1>

    <h1 className="Jumlah Kasus">
    <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
    <p>Jumlah Kasus</p>
    </h1>

    <h1 className="Last Update">
    <NumberFormat value={lastUpdate} thousandSeparator={true} displayType={'text'}/>
    <p>Last Update</p>
    </h1>
    
    
    </div>
  
 );
}

export default Indonesia;

