import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomA from './CustomA';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li><CustomA link="https://www.facebook.com/divesh.bansal" displayName="Divesh" /></li>
          <li><CustomA link="https://www.facebook.com/amrita.upreti" displayName="Amrita" /></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;