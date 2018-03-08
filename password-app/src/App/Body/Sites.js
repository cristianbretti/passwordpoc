import React, { Component } from 'react';
import './Sites.css';

class Sites extends Component {
	constructor(props) {
    	super(props);
    	
  	}


	render() {
		const passwordsElements = this.props.passwords.map((password) => 
			<li>{password.site}</li>);
		
		return(
			<ul>{passwordsElements}</ul>
		)
		
    }
}

export default Sites;
