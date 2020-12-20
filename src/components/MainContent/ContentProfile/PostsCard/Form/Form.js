import React from 'react'
import classes from './Form.module.css'
import Submit from './Submit/Submit'
import TextArea from './TextArea/TextArea'

const Form = (props) => {
  return (
    <form className={classes.form}>
      <TextArea />
      <Submit text={props.submitText} />
    </form>
  )
}

export default Form
