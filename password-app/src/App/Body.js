import React, { Component } from 'react';
import Sites from './Body/Sites';
import './Body.css';

class Body extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		passwords: []
    	};
  	}


	componentDidMount(){
		var url = "https://kodprov.herokuapp.com/"

		fetch(url).then(response => {
			if(response.status > 400){
				throw new Error("Server gave a bad response");
			}
			return response.json();
		}).then(data => {
			this.setState({
				passwords: data
			})
		})
	}

	render() {
    	return (
    		<div>
    			<Sites passwords={this.state.passwords}/>
    		</div>
    		
    );
  }
}

export default Body;
