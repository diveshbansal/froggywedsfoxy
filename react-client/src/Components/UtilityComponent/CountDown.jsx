import React, {Component} from 'react'
class CountDown extends Component {
  constructor(props) {
    super(props);
    this.weddingDate = new Date("Feb 25, 2019 00:00:00").getTime();
    this.state = {countDownText : this.tick() } ;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = this.weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(this.timerId);
      this.setState({
        countDownText: "The day is here!!"
      });
    }

    this.setState({
      countDownText: days + "d " + hours + "h "+ minutes + "m " + seconds + "s "
    });
  }

  render() {
    return (
      <h1 class="countdown">{this.state.countDownText}</h1>
    )
  }
}
export default CountDown;