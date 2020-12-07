import React,{useEffect,useState} from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";
import '../App.css';

function Global(){
    const [confirmed, setconfirmed]=useState("");
    const [deaths, setdeaths]=useState("");
    const [recovered, setrecovered]=useState("");
    console.log(confirmed,deaths,recovered);

useEffect(()=>{
    axios
    .get("https://covid19.mathdro.id/api")
    .then(response=>{
        setconfirmed(response.data.confirmed.value);
        setdeaths(response.data.deaths.value);
        setrecovered(response.data.recovered.value);
    }).catch(error=>{
        console.log(error);
    })
},[]);

return(
    <div className="container">
    <p>Jumlah Kasus Dunia</p>
    <h1 className="Positif">
    <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
    <p>Positif</p>
    </h1>

    <h1 className="Meninggal">
    <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
    <p>Meninggal</p>
    </h1>

    <h1 className="Sembuh">
    <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
    <p>Sembuh</p>
    </h1>
    </div>
  );
}

export default Global;
