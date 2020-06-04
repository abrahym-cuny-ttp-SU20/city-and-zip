import React from 'react';
import CitySearch from './components/CitySearch.js';

class App extends React.Component{
    render(){
      return <CitySearch cityName="nyc" />;
    }
}

export default App;
