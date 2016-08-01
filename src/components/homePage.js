import React from 'react';
import style from '../css/style.css';


class home extends React.Component {
  render = ()=>{
    return(
      <div className = "container">
	<div className="wrapper">
		<form className="form-signin">
		    <h3 className="form-signin-heading">Please Sign In</h3>
			  <hr className="colorgraph"></hr><br />

			  <input type="text" className="form-control" name="Username" placeholder="Username" required="" autofocus="" />
			  <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>

			  <button className="btn btn-lg btn-primary btn-block" value="Login">Login</button>
		</form>
	</div>
</div>
    )
  }
}

export default home;
