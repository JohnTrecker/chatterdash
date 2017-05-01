import React from 'react';
import './Header.css';

const Header = (props) => {
  let returningUser = props.users.filter( name => name === props.user)
  let otherUsers = props.users.filter( name => name !== props.user)
  let allUsers = returningUser.concat(otherUsers);
  return (
    <header id='header'>
      <h1>{props.room}</h1>
      <div className="users">
        {
          allUsers.map((name, i) => {
            return (i === 0 && name === props.user)
              ? <h3 key={i} style={{color: 'red'}}> {`${name}`} </h3>
              : (i === 0 ? <h3 key={i}> {`${name}`} </h3>
                : <h3 key={i}> {`, ${name}`} </h3>)
          })
        }
      </div>
    </header>
  )
}

export default Header;