import React, { Component } from 'react';
import Login from './components/Login.jsx';
import Nav from './components/Nav.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {user: 'John Trecker'}
  }
  render() {
    return (
      // <Login/>
      <Nav user={this.state.user}/>
    );
  }
}

export default App;
