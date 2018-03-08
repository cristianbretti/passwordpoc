import React, { Component } from 'react';
import Site from './SiteList/Site';
import './SiteList.css';

class SiteList extends Component {
	constructor(props) {
    	super(props);
    	
  	}


	render() {
		const siteElements = this.props.sites.map((site) => 
			<Site siteInfo={site}/>
			);

		return(
			<table className="Table">
				<tbody>
					{siteElements}
				</tbody>
			</table>
		)
		
    }
}

export default SiteList;
