import axios from "axios";

let url = 'https://covid19.mathdro.id/api'
export const FetchData = async (country)=>{
    let ChageData = url;

if(country){
    ChageData = `${url}/countries/${country}`
    
}

try{

    
    const {data:{confirmed, deaths, recovered,lastUpdate}} = await axios.get(ChageData)


    return {confirmed, deaths, recovered,lastUpdate}
}catch(error){
    console.log(error);
}
}
export const FetchDailyData = async () =>{

    try{
const {data} = await axios.get(`${url}/daily`);

const modifiedData = data.map((dailydata) => ({

    confirmed:dailydata.confirmed.total,
    deaths:dailydata.deaths.total,
    date:dailydata.reportDate,
}));

return modifiedData;

    }catch(error){
console.log(error);
    }
}
export const Countries = async () => {

    try{
const {data: {countries}} = await axios.get(`${url}/countries`)
return countries.map((country)=> country.name);
    }catch(error){
console.log(error);
    }
}