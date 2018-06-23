import React, {Component} from 'react'

class Number extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      status: true
    }
  }
  click = (type) => {
    const value = this.state.value
    const currentNumber = this.props.currentNumber
    this.setState((preState, props) => ({
      value: type==='UP' ? preState.value + props.currentNumber : preState.value - props.currentNumber
    }))
  }
  handleChangeStatus = () => {
    this.setState((preState) => ({
      status: !preState.status
    }))
  }
  //setState('object')
  render() {
    return (
      <div className="Number">
        <button onClick={() => this.click('DOWN')}>-</button>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.click('UP')}>+</button>
        <button onClick={() => this.handleChangeStatus()}>{this.state.status.toString()}</button>
      </div>
    )
  }
}

export default Number
