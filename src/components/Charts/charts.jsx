import React,{ useEffect, useState } from "react";

import {FetchDailyData} from '../../Api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

export default  function Charts({data:{confirmed,recovered, deaths}, country}) {
 const [dailydata, setDailydata] =useState([]);

useState(()=>{

    const FetchApi= async ()=>{

        setDailydata(await FetchDailyData())
    }
    FetchApi()
},[]);


const LineChart = (
    dailydata.length 
    ?(<Line  
    data= {{
        labels: dailydata.map(({date})=>date),
        datasets:[{
            data:dailydata.map(({confirmed})=>confirmed),
            label:'Infected',
            borderColor: '#3333ff',
            fill: true,
        } ,{
            data:dailydata.map(({confirmed})=>confirmed),
            label:'deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(250,0,0,0.5)',
            fill: true,
        }],
    }}
    />): null
);
const BarChart = (
  confirmed 
  ? (
      <Bar
      data ={{
        labels:['Infected', 'Recovered','Deaths'],

datasets:[{
    labels:'People',
    backgroundColor:[
      '  #545db8',
       ' #48b865',
       ' #cc3943',
    ],
    data:[confirmed.value, recovered.value, deaths.value]
}]
      }}
      options = {{

        legend:{display: false},
        title: {display: true, text:`Current state in ${country}`}
      }}

      
      />
  ) : null 
)
return (
    <div className={styles.container}>
        {country? BarChart: LineChart}
    </div>
)

}