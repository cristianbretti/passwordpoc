import React, { Component } from 'react';
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
			console.log(response.status)
			return response.json();
		}).then(data => {
			this.setState({
				passwords: data
			})
		})
	}

	render() {
    	return (
      	<h3>I'm a body!</h3>
    );
  }
}

export default Body;
