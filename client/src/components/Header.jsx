import React from 'react';
import './Header.css';

const Header = (props) =>
  <header id='header'>
    <h1>{props.room}</h1>
    <h3>{props.users}</h3>
  </header>

export default Header;