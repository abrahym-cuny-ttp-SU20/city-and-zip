import React from 'react';
import axios from 'axios';

class CitySearch extends React.Component {
	constructor(props){
		super(props);

		this.state = { zipCodes: [] };
	}

	componentDidMount() {
		axios
			.get(`http://ctp-zip-api.herokuapp.com/city/${(this.props.cityName).toUpperCase()}`)
			.then(res => {
				const { data } = res;

				this.setState({ zipCodes: data})
			})
			.catch(e => console.log(e) );
	}

	render(){
		return (
			<ul>
				{this.state.zipCodes.map(curZipCode => 
					<ZipcodeCard key={curZipCode}>{curZipCode} />)}
			</ul>
		);
	}
}

export default CitySearch;