import React from 'react';
import './Header.css';

const Header = (props) => {
  let returningUser = props.users.filter( name => name === props.user)
  let otherUsers = props.users.filter( name => name !== props.user)
  let allUsers = returningUser.concat(otherUsers);

  let renderUsername = (user, index, currentUser) => {

    if (index === 0 && user === currentUser) {
      return <h3 key={index} style={{color:'red'}}> {`${user}`} </h3>;
    }
    if (index === 0) {
      return <h3 key={index}> {`${user}`} </h3>
    }
    else {
      return <h3 key={index}> {`, ${user}`} </h3>
    }

  }

  return (
    <header id='header'>
      <h1>{props.room}</h1>
      <div className="users">
        {
          allUsers.map((name, i) => {
            let user = props.user
            return renderUsername(name, i, user)
          })
        }
      </div>
    </header>
  )
}

export default Header;