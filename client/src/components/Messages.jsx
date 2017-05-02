import React, {Component} from 'react';
import './Messages.css';

export default class Messages extends Component {
  constructor(){
    super();
    this.state = { messages: [] }
  }

  componentWillReceiveProps(nextProps){
    let roomChange = nextProps.room !== this.props.room;
    let newMessages = this.props.newMessages;
    if (newMessages || roomChange) {

      console.log('fetch called in Messages');
      fetch( `http://localhost:8081/api/rooms/${nextProps.room}/messages` )
        .then( res => res.json())
        .then( messages => this.setState({messages: messages}))
        .then(this.props.setMessages(false))
        .catch( err => console.log('Error fetching meesages: ', err))

    }
    else return
  }


  render(){
    return (
      <div id='messages' ref='messages'>

        {this.state.messages.map((info, i) => {

          const side = info.name === this.props.user ? 'right' : 'left';
          return (
            <div className='message' key={i}>
              <p className={`text ${side}`}>{info.message}</p>
              <h3 className={`name ${side}`}>{info.name}</h3>
            </div>
          )

        })}


      </div>
    )
  }

  componentDidMount(){
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight; // auto scroll
  }

}