import React, {Component} from 'react';
import './Textbox.css';

export default class Textbox extends Component {

  submit() {
    let { user, room, setMessages } = this.props
    let message = {
      name: user,
      message: this.refs.textBox.value
    }

    return fetch( `http://localhost:8081/api/rooms/${room}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    })
      .then(() => setMessages())
      .catch( err => console.log('Error putting new message: ', err))
  }

  render(){
    return (
      <div id='textbox'>

        <input
          type='text'
          ref='textBox'
          autoFocus={true}
          className='message-txt'
          placeholder='Type a message...' />

        <input
          type='button'
          value='Send'
          className='message-btn'
          onClick={this.submit.bind(this)} />

      </div>

    )
  }
}