import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {username: ''}
  }

  login(){
    let username = this.refs.textBox.value
    this.setState({username: username})
  }

  render() {
    return (
      <div className='login-component'>

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

        {this.state.username}

      </div>
    )
  }
}

