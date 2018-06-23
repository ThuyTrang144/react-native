import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import Number from './components/Number.js'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      value: 1
    }
  }
  componentWillMount = () => {
    console.log('will mount');
  }
  componentDidMount = () => {
    const value = this.state.value
    this.setState({value: value + 1})
    console.log('did mount');
  }
  renderElement = (yourName) => {
    return <p>{`Welcom to the World ${yourName}`}</p>
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <Header header={this.props.name}/>
        <Intro intro={this.props.author}/>
        <h1>{this.state.value}</h1>
        <Number />
      </div>
    );
  }
}

export default App
