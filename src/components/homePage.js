import React from 'react';
import style from '../css/style.css';
import Dashboard from './dashboard';
import Login from './login';


class home extends React.Component {
	state = {
		username: '',
		mountDashboard: false
	}

	onClick = () => {
		this.setState({ username: this.refs.login.getUsername().username, mountDashboard: true });
	}

  render = () => {
    return (
      <div className = "container">
				<div className="wrapper">
					{
						(!this.state.mountDashboard)
							?
							<Login onClick={this.onClick} ref='login'/>
							:
							<Dashboard username={this.state.username}/>}
				</div>
			</div>
    )
  }
}


export default home;
