import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <aside>
      <div className="header">
        <h1>{props.user}</h1>
        <h3>{`Online for ${props.timeOnline} minutes`}</h3>
      </div>
      <div className="rooms">
        {
          // props.rooms.map((room) => {
          //   room.name = props.room ? return :
          //     : <input
          //         type='button'
          //         key={room.id}
          //         value={room.name}
          //         onClick={props.setRoom(room.id)} />
          // })
        }
      </div>
    </aside>
  )
}

export default Nav;