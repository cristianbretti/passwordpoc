import React, { Component } from 'react';
import './Site.css';

class Site extends Component {
	constructor(props) {
    	super(props);
    	
  	}

	render() {
		return(
			<tr>
				<button>{this.props.siteInfo.site}</button>
			</tr>
		)
    }
}

export default Site;
