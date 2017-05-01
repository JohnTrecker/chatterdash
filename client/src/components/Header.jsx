import React from 'react';
import './Header.css';

const Header = (props) =>
  <header id='header'>
    <h1>{props.room}</h1>
    <h2>{props.users}</h2>
  </header>

export default Header;