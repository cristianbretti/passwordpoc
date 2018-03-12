import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CryptoJS from 'crypto-js';
import './Site.css';

const buttonStyle = {
	width: 150,
	heigth: 50,
	margin: 10
}

class Site extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		open: false,
    		password: ""
    	}
    	this.handleOpen = this.handleOpen.bind(this);
    	this.handleClose = this.handleClose.bind(this);
    	this.decrypt = this.decrypt.bind(this);
  	}

  	handleOpen(){
    	this.setState({open: true});
  	};

  	handleClose(){
  		this.setState({
  			open: false,
  			password: ""
  		});
  	};

  	decrypt(){
  		
		let decrypted = CryptoJS.AES.decrypt(
	 	{
	    	ciphertext: CryptoJS.enc.Hex.parse(this.props.siteInfo.password),
	    	salt: CryptoJS.lib.WordArray.create(0)
	  	},
	  	'edge.guide'
		);
		this.setState({
			password: decrypted.toString(CryptoJS.enc.Utf8),
		});
  		
  	}

	render() {
		const dialogButtons = [
	      <FlatButton
	        label="Decrypt"
	        primary={true}
	        onClick={this.decrypt}
	      />,
	      <FlatButton
	        label="Close"
	        primary={false}
	        onClick={this.handleClose}
	      />
    	];

    	//If the password is not decrypted, show asteriks
    	var passwordText = "******";
    	if(this.state.password !== ""){
    		passwordText = this.state.password;
    	}

		return(
			<tr>
				<RaisedButton
					onClick={this.handleOpen}
					style={buttonStyle}>
					{this.props.siteInfo.site}
				</RaisedButton>
				<Dialog
		          title={this.props.siteInfo.site}
		          actions={dialogButtons}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          {passwordText}
		        </Dialog>
			</tr>
		)
    }
}

export default Site;
