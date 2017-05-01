import React, {Component} from 'react';
import './Nav.css';

export default class Nav extends Component {

  message(time){
    let message = 'Online for '
    if (time < 3) return `${message} a hot second`
    else if (time < 60) return `${message} less that a minute`
    else if (time < 120) return `${message} 1 minute`
    else if (time >= 120) return `${message} ${time / 60} minutes`
    else return 'more than a hot second'
  }

  render(){
    let { user, rooms, setRoom, time } = this.props
    return (
      <aside id="Nav">

        <div className="header">
          <h1>{user}</h1>
          <h3>{this.message(time)}</h3>
        </div>

        <div className="rooms">
          { rooms.map((room) => {
              return <input
                type='button'
                key={room.id}
                id={room.id}
                value={room.name}
                className='room-btn'
                onClick={setRoom} />
            }) }
        </div>

      </aside>
    )
  }
}