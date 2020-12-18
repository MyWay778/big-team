import React from 'react'
import classes from './Form.module.css'
import Submit from './Submit/Submit'
import TextArea from './TextArea/TextArea'

const Form = () => {
  return (
    <form className={classes.form}>
      <TextArea />
      <Submit text="Поделиться" />
    </form>
  )
}

export default Form
