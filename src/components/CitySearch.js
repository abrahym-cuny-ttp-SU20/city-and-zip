import React, {Component} from 'react';
import axios from 'axios';


function CitySearch(props) {
	console.log(props);
	return (
	  <>
		<h1>The zip codes in {props.cityName} are:</h1>
		<ul>
		  {props.zipCodes.map((curZipCode) => (
			<li key={curZipCode}>{curZipCode}</li>
		  ))}
		</ul>
	  </>
	);
}

export default CitySearch;
