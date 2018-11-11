import React, { Component } from 'react';
import CountDown from '../UtilityComponent/CountDown.jsx';
class LandingPage extends Component {
  render() {
    return (
      <div class="landing-page">
        <h1>Amrita and Divesh</h1>
        <p>----- The wedding - 25/02/2019 -----</p>
        <CountDown />
      </div>
    )
  }
}
export default LandingPage;
