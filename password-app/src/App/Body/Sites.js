import React, { Component } from 'react';
import './Sites.css';

class Sites extends Component {
	constructor(props) {
    	super(props);
    	
  	}


	render() {
		const passwordsElements = this.props.passwords.map((password) => 
			<tr>
				<button>{password.site}</button>
			</tr>
			);

		return(
			<table className="Table">
				{passwordsElements}
			</table>
		)
		
    }
}

export default Sites;
