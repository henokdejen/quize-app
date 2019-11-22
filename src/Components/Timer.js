import React from 'react'

// expects onTimerFinishe, duration in sec

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: this.props.duration,
    }
  }

  componentDidMount() {
    if (this.state.duration > 0) {
      this.timerId = setInterval(() => this.tick(), 1000)
    }
  }

  componentWillMount() {
    clearInterval(this.timerId)
  }

  formatDurationIntoMinutes(numberOfSecs) {
    const minutes = Math.floor(numberOfSecs / 60)
    const seconds = numberOfSecs % 60
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  }

  tick() {
    this.setState((state) => ({
      duration: state.duration - 1
    }), () => {
      if (this.state.duration === 0) {
        clearInterval(this.timerId)
        this.props.onElapsed()
      }
    });
  }


  render() {
    const {duration} = this.state
    return (
      <span>{duration === 0 ? <span>Busted!</span>  : this.formatDurationIntoMinutes(duration)}</span>
    )
  }
}