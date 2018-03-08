import React, { Component } from 'react';
import SiteList from './Body/SiteList';
import SearchBox from './Body/SearchBox';
import './Body.css';

class Body extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		sites: [],
    		filteredSites: []
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
				sites: data,
				filteredSites: data
			})
		})
	}

	changeSearchText = (text) => {
		console.log(text);
		var filtered = [];
		for(var i in this.state.sites){
			if(this.state.sites[i].site.indexOf(text.trim()) !== -1){
				filtered.push(this.state.sites[i]);
			}
		}
		this.setState({
			filteredSites: filtered
		});

	}

	render() {
    	return (
    		<div>
    			<SearchBox onChange={this.changeSearchText}/>
    			<SiteList sites={this.state.filteredSites}/>
    		</div>
    		
    );
  }
}

export default Body;
