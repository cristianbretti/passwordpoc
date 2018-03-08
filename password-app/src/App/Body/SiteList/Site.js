import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './Site.css';

class Site extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		open: false
    	}
  	}

  	handleOpen = () => {
    	this.setState({open: true});
  	};

  	handleClose = () => {
  		this.setState({open: false});
  	}

	render() {
		const buttons = [
	      <FlatButton
	        label="Decrypt"
	        primary={true}
	      />,
	      <FlatButton
	        label="Close"
	        primary={true}
	        onClick={this.handleClose}
	      />
    ];
		return(
			<tr>
				<div>
					<button onClick={this.handleOpen}>{this.props.siteInfo.site}</button>
					<Dialog
			          title={this.props.siteInfo.site}
			          actions={buttons}
			          modal={false}
			          open={this.state.open}
			          onRequestClose={this.handleClose}
			        >
			          {this.props.siteInfo.password}
			        </Dialog>
				</div>
				
			</tr>
		)
    }
}

export default Site;
