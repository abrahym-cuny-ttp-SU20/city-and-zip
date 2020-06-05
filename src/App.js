import React, { Component } from 'react';
import axios from 'axios';
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
          <label>Please enter a city: </label>

          <input 
            type="text"
            onChange={this.handleChange} />

          <CitySearch 
            cityName={this.state.cityName} 
            zipCodes={this.state.zipCodes} />
        </>
      );
    }
}

export default App;
