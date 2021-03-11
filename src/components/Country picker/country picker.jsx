import React,{useEffect,useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {Countries} from "../../Api";
import styles from './Country.module.css';
export default  function CountryPicker({handelCounrtychange}) {
const [Fetchcountry, setFetchcountry]= useState([]);

useEffect(() => {
   const CountryApi = async () =>{

setFetchcountry(await Countries())

   }
   CountryApi();
}, [setFetchcountry])

return (
  <FormControl>

      <NativeSelect defaultValue= '' onChange={(evt)=> handelCounrtychange(evt.target.value)}>
          <option value="Global">Global</option>
          {Fetchcountry.map((country,ind)=><option key={ind} value={country}>{country}</option>)}
      </NativeSelect>
  </FormControl>
)

}