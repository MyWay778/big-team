import React from 'react'
import classes from './Form.module.css'
import Submit from './Submit/Submit'
import TextArea from './TextArea/TextArea'

const Form = (props) => {

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <TextArea  newValue={props.newValue}  placeholder={props.placeholder} handleChange={props.handleChange} />
      <Submit text={props.submitText} />
    </form>
  )
}

export default Form
