import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  login(){
    let username = this.refs.textBox.value
    this.props.setUser(username)
  }

  render() {
    return (
      <div className='login'>

        <input
          type='text'
          ref='textBox'
          autoFocus={true}
          className='login-txt'
          placeholder='Type your username...' />

        <input
          type='button'
          value='Join the DoorDash Chat!'
          className='login-btn'
          onClick={this.login.bind(this)} />

      </div>
    )
  }
}

