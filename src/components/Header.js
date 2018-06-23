import React, {Component} from 'react'
import logo from '../logo.svg'

const renderArtical = (name) => {
  return (
    <h1 className="App-title">Welcome to Class {name}</h1>
  )
}
const renderTitle = (title) => {
  return (
    <h1 className="App-title">Welcome to Reacts</h1>
  )
}
const renderLogo = () => {
  return (
    <img className="App-logo" src={logo} alt="logo"/>
  )
}
const Header = (props) => {
  return (
    <header className="App-header">
      {renderLogo(props.header)}
      {renderTitle(props.header)}
      {renderArtical(props.header)}
    </header>
  )
}//statesfull
export default Header
