import React, {Component} from 'react'

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueInput: ''
    }
  }
  onChangeText = (event) => {
    console.log('event', event.target.value);
    this.setState({
      valueInput: event.target.value
    })
  }
  render() {
    return (
      <input
      type='text'
      value={this.state.valueInput}
      onChange={(event) => this.onChangeText(event)}
      />
    )
  }
}

export default TextInput
