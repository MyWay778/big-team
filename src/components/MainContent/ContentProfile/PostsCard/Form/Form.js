import React from 'react'
import classes from './Form.module.css'
import Submit from './Submit/Submit'
import TextArea from './TextArea/TextArea'

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const action = props.actionCreators.submit()
        props.dispatch(action)

    }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextArea  newValue={props.newValue} dispatch={props.dispatch} actionCreator={props.actionCreators.change} placeholder={props.placeholder}/>
      <Submit text={props.submitText} />
    </form>
  )
}

export default Form
