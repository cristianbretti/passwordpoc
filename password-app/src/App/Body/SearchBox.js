import React, { Component } from 'react';
import './SearchBox.css';
import TextField from 'material-ui/TextField';

class SearchBox extends Component {
	
	onChange = (event, newValue) => {
		this.props.onChange(newValue);
	}


	render() {
    	return (
		<TextField hintText="Sök" onChange={this.onChange}/>	
    );
  }
}

export default SearchBox;
