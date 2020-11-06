import React from 'react';

import Cards from "./Components/Cards/Cards.component";
import Chart from "./Components/Chart/Chart.component";
import CountrySelect from "./Components/CountrySelect/CountrySelect.component";
import {fetchData} from "./Api";

import styles from './app.module.css';
import image from './images/logo.png';


class App extends React.Component {
    
    state = {
        data: {},
        country: ''
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }
    
    render() {
        
        const { data, country } = this.state;
        
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="App-Logo" />
               <Cards data={data} />
               <CountrySelect handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
