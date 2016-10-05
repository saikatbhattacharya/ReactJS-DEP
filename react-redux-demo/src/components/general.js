import React from 'react';
import style from '../css/style.css';
import store from '../store';


class general extends React.Component {

    updateFormValues = ()=>{
        store.dispatch({
            type:'FORM_DATA',
            fname: this.refs.fname.value,
            lname: this.refs.lname.value,
            email: this.refs.email.value
        })
    }

    render = () => {
        return (
            <div>
                <input type="text" className="form-control" placeholder="First name" value={this.props.fname} onChange={this.updateFormValues} ref="fname"/>
                <input type="text" className="form-control" placeholder="Last name" value={this.props.lname} onChange={this.updateFormValues} ref="lname"/>
                <input type="text" className="form-control" placeholder="Email" value={this.props.email} onChange={this.updateFormValues} ref="email"/>
                <br/>
            </div>
        )
    }
}

export default general;
