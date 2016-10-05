import React from 'react';
import style from '../css/style.css';
import store from '../store';


class details extends React.Component {

  checkbox = () => {
    store.dispatch({
      type: "IS_CHECKED",
      optIn: !this.props.optIn
    })
  }

  render = () => {
    return (
      <div>
        <br/>
        <form onClick={this.checkbox}>
          <p>
            <input type="checkbox" className="filled-in" id="filled-in-box" checked={this.props.optIn}/>
            <label for="filled-in-box">Add me to email list</label>
          </p>
        </form>
      </div>
    )
  }
}

export default details;
