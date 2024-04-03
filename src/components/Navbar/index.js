import './index.css'
import {Component} from 'react'

class Navbar extends Component {
  state = {time: 60}

  componentDidMount() {
    this.timerId = setInterval(this.statusChange, 1000)
  }

  statusChange = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearInterval(this.timerId)
    }
  }

  render() {
    const {time} = this.state
    return (
      <nav className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="score-time-container">
          <h1 className="score">Score: 0</h1>
          <h1 className="time">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="clock"
            />{' '}
            {time}
          </h1>
        </div>
      </nav>
    )
  }
}
export default Navbar
