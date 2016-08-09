import React from 'react';
import style from '../css/style.css';


class dashboard extends React.Component {

    getUsername = ()=>{
        return {
            username: this.refs.username.value
        }
    }

    render = () => {
        return (
            <div className="form-signin">
                <h3 className="form-signin-heading">Please Sign In</h3>
                <hr className="colorgraph"></hr><br />
                <input type="text" className="form-control" placeholder="Username" ref="username"/>
                <br/><button className="btn btn-lg btn-primary btn-block" value="Login" onClick={this.props.onClick}>Login</button>
            </div>
        )
    }
}

export default dashboard;
