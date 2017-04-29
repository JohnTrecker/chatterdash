import React, { Component } from 'react';
import Login from './components/Login.jsx';
import Nav from './components/Nav.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: 'John Trecker',
      room: 'Your Room'
    }
    this.setRoom.bind(this);
  }

  setRoom(room){
    this.setState({room: room});
  }



  render() {
    return (
      // <Login/>
      <Nav
        user={this.state.user}
        room={this.state.room}
        setRoom={this.setRoom}
        timeOnline={'12'} />
    );
  }
}

export default App;
