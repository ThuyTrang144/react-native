import React, {Component} from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
  }
}
  componentWillMount = () => {
    console.log('will mount');
  }
  componentDidMount = () => {
    this.setState({time: 10})
    console.log('did mount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    let timeout = setTimeout(() => {
      this.setState(preState => ({
        time: preState.time - 1
      }))
    }, 1000);
    if(nextState.time === (-1)) {
      clearTimeout(timeout)
      return false
    }
    return true
  }

  render() {
    console.log('render');
    return (
      <div className="LifeCycle">
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default LifeCycle
