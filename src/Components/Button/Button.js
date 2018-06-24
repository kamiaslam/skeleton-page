import React, { Component } from 'react';
import './btn.scss';

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: "btn-warning"
    }

  }

  addClass = e => {

    if (this.state.active && this.state.active === 'btn-warning') {
      this.setState({
        active: 'btn-danger'
      })
    }
    else {
      this.setState({
        active: 'btn-warning'
      })
    }
  }

  render() {
    return (
      <div className="kamran">
        <button className={'btn ' + this.state.active} onClick={(e) => this.addClass(e)}>Sample button</button>
      </div>
    );
  }
}

export default Button;
