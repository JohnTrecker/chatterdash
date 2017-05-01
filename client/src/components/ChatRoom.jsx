import React, {Component} from 'react';
import './ChatRoom.css';

export default class Chatroom extends Component {
  constructor(){
    super();
    this.state = {
      roomInfo: ''
    }
  }

  componentWillMount(){
    let { room } = this.props
    let id = room.id || 0
    fetch( `http://localhost:8081/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  componentWillReceiveProps(){
    let { room } = this.props
    let id = room.id || 0
    fetch( `http://localhost:8081/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  render(){
    let { room } = this.props
    let { roomInfo } = this.state
    return (
      <div>
        <Header
          room={room.name || 'Choose a Room'}
          users={roomInfo.users || []} />
        <Messages />
        <TextBox />
      </div>
    )
  }
}


const Header = (props) =>
  <header>
    <h1>{props.room}</h1>
    <h2>{props.users}</h2>
  </header>

const Messages = (props) =>
  <div>Messages</div>

const TextBox = (props) =>
  <div>TextBox</div>
