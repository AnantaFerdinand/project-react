import React,{useEffect,useState} from 'react';
import axios from "axios";
import '../App.css';
import NumberFormat from 'react-number-format';
const Provinsi = () => {
  const[data, setdata]=useState([]);
  const[fid, setfid]=useState([]);
  const[kodeProvinsi, setkodeProvinsi]=useState([]);
  const[provinsi, setprovinsi]=useState([]);
  const[kasusPositif, setkasusPositif]=useState([]);
  const[kasusSembuh, setkasusSembuh]=useState([]);
  const[kasusMeninggal, setkasusMeninggal]=useState([]);
  <NumberFormat value={12345} displayType={'text'} thousandSeparator={true}/>
  useEffect(()=>{
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((response)=>
      {
        setdata(response.data.data.value);
        setfid(response.data.fid.value);
        setkodeProvinsi(response.data.kodeProvinsi.value);
        setprovinsi(response.data.provinsi.value);
        setkasusPositif(response.data.kasusPositif.value);
        setkasusSembuh(response.data.kasusSembuh.value);
        setkasusMeninggal(response.data.kasusMeninggal.value);
        console.log(data,fid,kodeProvinsi,provinsi,kasusPositif,kasusSembuh,kasusMeninggal);
      }).catch(errors=>{
          console.log(errors);
      })
    });
    return(
        <>
        <p>Jumlah Kasus Provinsi</p>
        {(data,fid,kodeProvinsi,provinsi,kasusPositif,kasusSembuh,kasusMeninggal).map((item)=>{
            return(
                <Provinsi
                data={item.data}
                fid={item.fid}
                kodeProvinsi={item.kodeProvinsi}
                kasusPositif={item.kasusPositif}
                kasusSembuh={item.kasusSembuh}
                kasusMeninggal={item.kasusMeninggal}
                />
            )
     })}
        </>
    );
}

export default Provinsi;
