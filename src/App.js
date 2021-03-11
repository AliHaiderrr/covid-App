
import React from 'react';
import {Cards,Chart,CountryPicker} from "./components";
import styles from './App.module.css';
import {FetchData} from "./Api";
import  CaronaImage  from "./Images/image.png";

 class App extends React.Component {
state={
  data: {},
  country: '',
}
  async componentDidMount(){

    const FetchedData = await FetchData();
    this.setState({data:  FetchedData})

  }
  handelCounrtychange = async (country) => {
    const FetchedData = await FetchData(country);

    this.setState({data:  FetchedData, country:country})


  }
   render(){
    const { data, country } = this.state;

     return (
       <div className={styles.container}>
         <img className={styles.image} src={CaronaImage} alt="Covid-19"/>
        <Cards data={data}/>
        <CountryPicker handelCounrtychange={this.handelCounrtychange}/>
        <Chart data={data} country={country}/>
        
       </div>
     )
   }
   }
export default App;