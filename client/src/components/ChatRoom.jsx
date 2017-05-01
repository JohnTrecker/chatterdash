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

  componentWillReceiveProps(nextProps){
    if (parseInt(this.props.room.id, 10) === this.state.roomInfo.id) return

    let id = nextProps.room.id;
    fetch( `http://localhost:8081/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  render(){
    let { room } = this.props
    let { roomInfo } = this.state
    return (
      <div id='chatroom'>
        <Header
          room={room.name || 'Choose a Room'}
          users={roomInfo.users || []} />
        <Messages />
        <Textbox />
      </div>
    )
  }
}