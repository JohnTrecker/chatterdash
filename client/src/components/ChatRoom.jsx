import React, {Component} from 'react';
import Header from './Header';
import Messages from './Messages';
import Textbox from './Textbox';
import './ChatRoom.css';

export default class Chatroom extends Component {
  constructor(){
    super();
    this.state = {
      roomInfo: '',
      newMessages: true
    }
  }

  componentWillReceiveProps(nextProps){
    if (parseInt(this.props.room.id, 10) === this.state.roomInfo.id) return // filter unnecessary API calls

    let id = nextProps.room.id;
    fetch( `/api/rooms/${id}` )
      .then( res => res.json())
      .then( info => this.setState({roomInfo: info}))
      .catch( err => console.log('Error feetching room info: ', err))
  }

  setMessages(bool){
    this.setState({newMessages: bool})
  }

  render(){
    let { room, user } = this.props
    let { roomInfo, newMessages } = this.state
    return (
      <div id='chatroom'>
        <Header
          user={user}
          room={room.name || 'Choose a Room'}
          users={roomInfo.users || []} />
        <Messages
          user={user}
          room={room.id}
          newMessages={newMessages}
          setMessages={this.setMessages.bind(this)} />
        <Textbox
          user={user}
          room={room.id}
          setMessages={this.setMessages.bind(this)} />
      </div>
    )
  }
}