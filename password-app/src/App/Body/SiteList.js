import React, { Component } from 'react';
import Site from './SiteList/Site';
import './SiteList.css';

class SiteList extends Component {
	constructor(props) {
    	super(props);
    	
  	}


	render() {
		const passwordsElements = this.props.passwords.map((password) => 
			<Site siteInfo={password}/>
			);

		return(
			<table className="Table">
				{passwordsElements}
			</table>
		)
		
    }
}

export default SiteList;
