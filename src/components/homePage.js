import React from 'react';
import style from '../css/style.css';
import {Link} from 'react-router';



class home extends React.Component {

  render = () => {
    return (
      <div className = "container">
				<div className="wrapper">
					<div className="form-signin">
						<h3 className="form-signin-heading">Please Sign In</h3>
						<hr className="colorgraph"></hr><br />

						<input type="text" className="form-control" placeholder="Username"/>
						<br/><Link to='/dashboard' className="btn btn-lg btn-primary btn-block" value="Login">Login</Link>
					</div>
				</div>
			</div>
    )
  }
}


export default home;
