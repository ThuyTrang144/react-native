import React, {Component} from 'react'
const Intro = (props) => {
  return (
    <div>
      <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
      <p>{`Hello world ${props.intro}`}</p>
    </div>
  )
}

export default Intro
