import React, { Component } from "react"
import PropTypes from "prop-types"

import countdownStyles from "./countdown.module.scss"

/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = "0" + value
    }
    return value
  }

  render() {
    const countDown = this.state
    return (
      <div
        className="row py-4 col-sm-12 m-0"
        style={{
          background: "#004547",
          color: "#ffffff",
          borderRadius: "25px",
        }}
      >
        <div className="col-lg-3 col-md-6 col-sm-12 py-2 px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <div className="display-4">
                {this.addLeadingZeros(countDown.days)}
              </div>
              <div className="h5 pt-2">HARI</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-2 px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <div className="display-4">
                {this.addLeadingZeros(countDown.hours)}
              </div>
              <div className="h5 pt-2">JAM</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-2 px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <div className="display-4">
                {this.addLeadingZeros(countDown.min)}
              </div>
              <div className="h5 pt-2">MENIT</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-2 px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <div className="display-4">
                {this.addLeadingZeros(countDown.sec)}
              </div>
              <div className="h5 pt-2">DETIK</div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
}

Countdown.defaultProps = {
  date: new Date(),
}

export default Countdown
