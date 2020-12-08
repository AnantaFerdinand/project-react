import React,{useEffect,useState} from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";
import '../App.css';


function Indonesia(){
const[perawatan, setPerawatan]=useState("");
const[sembuh, setSembuh]=useState("");
const[meninggal, setMeninggal]=useState("");
const[jumlahKasus, setJumlahKasus]=useState("");
const[lastUpdate, setLastUpdate]=useState("");


useEffect(()=>{
    
       axios
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then(response=>{
        setPerawatan(response.data.perawatan.value);
        setSembuh(response.data.sembuh.value);
        setMeninggal(response.data.meninggal.value);
        setJumlahKasus(response.data.jumlahKasus.value);
        setLastUpdate(response.data.lastUpdate.value);
    }).catch(error=>{
        console.log(error);
        console.log("https://indonesia-covid-19.mathdro.id/api");
    })
 
       
},[]);
console.log(perawatan,sembuh,meninggal,jumlahKasus, lastUpdate);

return(
    
    <div className="container"> 
    <p>Jumlah Kasus Indonesia</p>
    <h1 className="Positif">
    <NumberFormat value={perawatan} thousandSeparator={true} displayType={'text'}/>
    <p>Positif</p>
    </h1>

    <h1 className="Sembuh">
    <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
    <p>Sembuh</p>
    </h1>

    <h1 className="Meninggal">
    <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
    <p>Meninggal</p>
    </h1>

    <h1 className="Jumlah Kasus">
    <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
    {/* <p>Jumlah Kasus</p> */}
    </h1>

    <h1 className="Last Update">
    <NumberFormat value={lastUpdate} thousandSeparator={true} displayType={'text'}/>
    {/* <p>Last Update</p> */}
    </h1>
    
    
    </div>
  
 );
}

export default Indonesia;

