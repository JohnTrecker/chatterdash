import React, {Component} from 'react';
import './Textbox.css';

export default class Textbox extends Component {

  submit() {
    let { user, room, setMessages } = this.props
    let message = {
      name: user,
      message: this.refs.textBox.value
    }

    this.refs.textBox.value = ''
    this.refs.textBox.placeholder = 'Message sent!'

    let reset = () => {
      const placeholders = ['Keep it going', 'Don\'t be that guy', 'Insightful',
      'Do you even lift bro', 'Hooli is watching', 'I dig the way you press those key; so strong',
      'PiperChat downround in May, calling it now', 'Because the world needs another chat app',
      'That John Trecker is okay by me -- Ghandi', 'Oh no he didn\'t', 'DoorDash dished Dutch dishes from dance floor to drug store']
      this.refs.textBox.value = ''
      this.refs.textBox.placeholder = placeholders[Math.floor(Math.random() * 10)].concat('...')
    }

    reset.bind(this)
    setTimeout(reset, 2000)

    return fetch( `/api/rooms/${room}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    })
      .then(setMessages(true))
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