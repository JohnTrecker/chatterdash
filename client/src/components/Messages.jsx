import React, {Component} from 'react';
import './Messages.css';

export default class Messages extends Component {
  constructor(){
    super();
    this.state = {messages: []}
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.room === this.props.room) return // unnecessary API calls

    fetch( `http://localhost:8081/api/rooms/${nextProps.room}/messages` )
      .then( res => res.json())
      .then( messages => this.setState({messages: messages}))
      .catch( err => console.log('Error fetching meesages: ', err))

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