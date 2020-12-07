import React,{useEffect,useState} from 'react';
import axios from "axios";
import '../App.css';
import NumberFormat from 'react-number-format';

const Indonesia = () => {
const[perawatan, setperawatan]=useState([]);
const[sembuh, setsembuh]=useState([]);
const[meninggal, setmeninggal]=useState([]);
const[jumlahKasus, setjumlahKasus]=useState([]);
const[lastUpdate, setlastUpdate]=useState([]);
<NumberFormat value={12345} displayType={'text'} thousandSeparator={true}/>
useEffect(()=>{
axios
.get("https://indonesia-covid19.mathdro.id/api")
.then((response)=>
{
setperawatan(response.data.perawatan.value);
setsembuh(response.data.sembuh.value);
setmeninggal(response.data.meninggal.value);
setjumlahKasus(response.data.jumlahKasus.value);
setlastUpdate(response.data.lastUpdate.value);
console.log(perawatan,sembuh,meninggal,jumlahKasus,lastUpdate);
}).catch(errors=>{
console.log(errors);
})
});
return(
    <>
    <p>Jumlah Kasus Indonesia</p>
    {(perawatan,sembuh,meninggal,jumlahKasus,lastUpdate).map((item)=>{
        return(
            <Indonesia
            perawatan={item.perawatan}
            sembuh={item.sembuh}
            meninggal={item.meninggal}
            jumlahKasus={item.jumlahKasus}
            lastUpdate={item.lastUpdate}
            />
        );
    })}
    </>
)
    
}

export default Indonesia;
