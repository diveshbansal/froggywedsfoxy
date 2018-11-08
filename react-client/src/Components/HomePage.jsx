import React, { Component } from 'react';
import CountDown from './UtilityComponent/CountDown.jsx';
class HomePage extends Component {
  render() {
    return (
      <div class="home-page">
        <h1>Amrita weds Divesh</h1>
        <p>Love knows no bounds.</p>
        <CountDown />
      </div>
    )
  }
}
export default HomePage;