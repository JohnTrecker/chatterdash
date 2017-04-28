import React, { Component } from 'react';

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
      <div>
        <input
          type='text'
          ref='textBox'
          placeholder='Type your username...' />
        <input
          type='button'
          autoFocus={true}
          value={'Join the DoorDash Chat!'}
          onClick={this.login.bind(this)} />
        {this.state.username}
      </div>
    )
  }
}

