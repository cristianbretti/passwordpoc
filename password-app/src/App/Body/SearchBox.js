import React, { Component } from 'react';
import './SearchBox.css';
import TextField from 'material-ui/TextField';

class SearchBox extends Component {
	
	render() {
    	return (
		<TextField hintText="Sök"/>	
    );
  }
}

export default SearchBox;
