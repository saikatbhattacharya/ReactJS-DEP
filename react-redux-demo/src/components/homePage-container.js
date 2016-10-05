import React from 'react';
import { connect } from 'react-redux';
import style from '../css/style.css';
import Details from './details';
import General from './general';
import store from '../store';


class home extends React.Component {
	state = {
		mountDetails: false,
		genBtnClassName: 'waves-effect waves-light btn disabled',
		detBtnClasName: 'waves-effect waves-light btn'
	}

	onDetailsTabClick = () => {
		this.setState({
			mountDetails: true,
			detBtnClasName: 'waves-effect waves-light btn disabled',
			genBtnClassName: 'waves-effect waves-light btn'
		});
	}

	onGenTabClick = () => {
		this.setState({
			mountDetails: false,
			detBtnClasName: 'waves-effect waves-light btn ',
			genBtnClassName: 'waves-effect waves-light btn disabled'
		});
	}

	formSubmit = () => {
		store.dispatch({
			type: 'ON_SUBMIT',
			formObj: {
				fName: this.props.fname,
				lName: this.props.lname,
				email: this.props.email,
				optIn: this.props.optIn
			}
		})
	}

	render = () => {
		console.log(" Information printing: ", JSON.stringify(this.props.formObj));
		return (
			<div className = "container">
				<div className="wrapper card">
					<div className="card-content">
						<a className={this.state.genBtnClassName} onClick={this.onGenTabClick}>General</a>
						<a className={this.state.detBtnClasName} onClick={this.onDetailsTabClick}>Details</a>
						{
							(!this.state.mountDetails)
								?
								<General 
								fname={this.props.fname}
								lname={this.props.lname}
								email={this.props.email}/>
								:
								<Details
								optIn={this.props.optIn}/>
						}
						<button className="btn " value="Submit" onClick={this.formSubmit}>Submit</button>
					</div>
				</div>
			</div>
			
		)
	}
}

let mapStateToProps = (store) => {
	return {
		fname: store.formState.fname,
		lname: store.formState.lname,
		email: store.formState.email,
		optIn: store.formState.optIn,
		formObj: store.formState.formObj
	};
};


export default connect(mapStateToProps)(home);
