import React, { Component } from 'react';
import Nav from './Nav';
import ChatRoom from './ChatRoom';
import './Main.css';

export default class Main extends Component {
  constructor(){
    super();
    this.state = {
      room: {},
      rooms: [],
      time: 0
    }
    this.newTime = this.newTime.bind(this)
  }

  setRoom(e){
    const { value, id } = e.target;
    this.setState({ room: {name: value, id: id} });
  }

  newTime(){
    let newTime = this.state.time + 1
    this.setState({time: newTime})
  }

  componentWillMount() {
    fetch( 'http://localhost:8081/api/rooms' )
      .then( res => res.json())
      .then( rooms => this.setState( {rooms: rooms, room: rooms[0]} ))
  }

  render(props) {

    let { user } = this.props
    let { room, rooms, time } = this.state;

    return (
      <div id='Main'>

        <Nav
          user={user}
          rooms={rooms}
          time={time}
          setRoom={this.setRoom.bind(this)} />

        <ChatRoom
          user={user}
          room={room} />

      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(this.newTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}