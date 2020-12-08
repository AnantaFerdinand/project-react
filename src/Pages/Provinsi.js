import React,{useEffect,useState} from 'react';
import NumberFormat from "react-number-format";
import axios from "axios";
import '../App.css';

function Provinsi(){
const [dataProvince, ListProvince]=useState([]);
console.log(dataProvince);
useEffect(()=>{
      axios
       .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
       .then(response=>{
        ListProvince(response.data.data);
       }).catch(error=>{
           console.log(error)
       })
        
},[]);

    return(
        <center>
        <p>Jumlah Kasus Provinsi</p>
        <table className="table" border="8">

        <tr className="tr">
        <th><center>Provinsi</center></th>
        <th><center>Positif</center></th>
        <th><center>Sembuh</center></th>
        <th><center>Meninggal</center></th>
        </tr>

        {dataProvince.map((item,index)=>{
            return(
                <tr className="tr">
                <th scope="row" key={item.fid}><center>{index+1}.</center></th>

                <th><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} 
                displayType={'text'}/></center></th>

                <th><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} 
                displayType={'text'}/></center></th>

                <th><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} 
                displayType={'text'}/></center></th>
                </tr>
            )
        })}
        </table>
        </center>
    );
}

export default Provinsi;

