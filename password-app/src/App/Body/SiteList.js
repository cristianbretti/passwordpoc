import React, { Component } from 'react';
import Site from './SiteList/Site';
import './SiteList.css';

class SiteList extends Component {
	render() {
		const siteElements = this.props.sites.map((site) => 
			<Site siteInfo={site} key={site.site}/>
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
