import React, {Component} from 'react';
import './Messages.css';

export default class Messages extends Component {
  constructor(){
    super();
    this.state = {messages: []}
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.room === this.props.room) return

    fetch( `http://localhost:8081/api/rooms/${nextProps.room}/messages` )
      .then( res => res.json())
      .then( messages => this.setState({messages: messages}))
      .catch( err => console.log('Error fetching meesages: ', err))

  }

  render(){
    return (
      <div id='messages'>

        {this.state.messages.map((info, i) =>
          <div key={i}  >
            <p className='text'>{info.message}</p>
            <h3 className='name'>{info.name}</h3>
          </div>
        )}

      </div>
    )
  }
}