import React from 'react';
import style from '../css/style.css';


class home extends React.Component {
	onClick = () => {
		this.context.router.push('/dashboard');
	}

  render = () => {
    return (
      <div className = "container">
				<div className="wrapper">
					<div className="form-signin">
						<h3 className="form-signin-heading">Please Sign In</h3>
						<hr className="colorgraph"></hr><br />

						<input type="text" className="form-control" placeholder="Username"/>
						<br/><button className="btn btn-lg btn-primary btn-block" value="Login" onClick={this.onClick}>Login</button>
					</div>
				</div>
			</div>
    )
  }
}

home.contextTypes = {
	router: React.PropTypes.object
}

export default home;
