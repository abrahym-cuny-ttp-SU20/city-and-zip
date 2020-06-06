import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CitySearch from './components/CitySearch.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cityName: "",
      zipCodes: [],
    };
  }

  handleChange = (e) => {
    const cityName = e.target.value.toUpperCase();

    axios
      .get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`)
      .then((res) => {
        const zipCodes = res.data;

        this.setState({
          cityName,
          zipCodes,
        });
      }).catch(err => console.log(err));


  }

    render() {
      return (
        <> 
        <body>
         <div className="container">
          <h1 className="App-header">Zip Code search based on city</h1>
          <br></br>
          <label>Please enter a city: </label>

          <input 
            type="text"
            onChange={this.handleChange} />

          <CitySearch 
            cityName={this.state.cityName} 
            zipCodes={this.state.zipCodes} />
        </div>
        </body>
        </>
      );
    }
}

export default App;
