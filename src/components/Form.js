import React, {Component} from 'react'
import Button from './Button'

const Form = (props) => {
  return (
    <div>
      <p>Form</p>
      <Button name={'Back'} onClick={props.gotoBack}/>
      <Button name={'Add'} onClick={props.addProduct}/>
    </div>
  )
}

export default Form
