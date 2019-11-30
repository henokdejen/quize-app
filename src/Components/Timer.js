import React from 'react'
import { Progress } from 'antd';
import { TimerType } from './Constants'
// expects onTimerFinishe, duration in sec

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.initialDuration = this.props.duration
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
    const { duration } = this.state
    const { timerType} = this.props

    return (
      (timerType === TimerType.circular) ?
        <CircularCountDown
          duration={duration}
          initialDuration={this.initialDuration} /> :
        <NormalCountDown
          duration={duration} />
    )
  }
}


function CircularCountDown(props) {
  const { duration, initialDuration } = props

  return (
    <Progress 
    type="circle" 
    percent={(initialDuration - duration) / initialDuration * 100} 
    format = {() => (<div><h1>{duration}</h1> sec</div>)}
    width = "200px"
    />
  )
}

function NormalCountDown(props) {
  const formatDurationIntoMinutes = (numberOfSecs) => {
    const minutes = Math.floor(numberOfSecs / 60)
    const seconds = numberOfSecs % 60
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  }

  const { duration } = props
  return (
    <span>{duration === 0 ? <span>Busted!</span> : formatDurationIntoMinutes(duration)}'</span>
  )
}


