import React from 'react';
import style from '../css/style.css';


class dashboard extends React.Component {

  componentWillMount(){
      console.log("** component will mount **");
  }

  render = ()=>{
    return(
		<div className="form-signin">
		    <h3 className="form-signin-heading">Welcome</h3>
			  <hr className="colorgraph"></hr><br />
              <h3 className="form-signin-heading">{this.props.username}</h3>
		</div>
    )
  }
}

export default dashboard;
