import React, {Component} from 'react';
import Header from './Header';
import Messages from './Messages';
import Textbox from './Textbox';
import './ChatRoom.css';

export default class Chatroom extends Component {
  constructor(){
    super();
    this.state = {
      roomInfo: ''
    }
  }

  componentWillMount(){
    let id = this.props.room.id;
    fetch( `http://localhost:8081/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  componentWillReceiveProps(nextProps){
    if (parseInt(this.props.room.id, 10) === this.state.roomInfo.id) return

    let id = nextProps.room.id;
    fetch( `http://localhost:8081/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  render(){
    let { room, user } = this.props
    let { roomInfo } = this.state
    return (
      <div id='chatroom'>
        <Header
          user={user}
          room={room.name || 'Choose a Room'}
          users={roomInfo.users || []} />
        <Messages
          user={user}
          room={room.id} />
        <Textbox
          user={user}
          room={room.id} />
      </div>
    )
  }
}