import React, { Component } from 'react';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';

export default class App extends Component {
  constructor(){
    super();
    this.state = { user: undefined }
  }

  setUser(user){
    this.setState({user: user});
  }

  render() {
    return (
      this.state.user
        ? <Main user={this.state.user} />
        : <Login setUser={this.setUser.bind(this)} />
    );
  }
}