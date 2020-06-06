import React, {Component} from 'react';
import axios from 'axios';


function CitySearch(props){ 
	console.log(props);

	return (
		<>
		<div className="input-group-append">
			<h2>The zip codes in {(props.cityName)} are:</h2>				
			<ul>
				{props.zipCodes.map(curZipCode => 
					<li key={curZipCode}>{curZipCode}</li>) }
			</ul>
		</div>
		</>
	);
}

export default CitySearch;
