import React from 'react'
import classes from './TextArea.module.css'

const TextArea = (props) => {
  const handleChange = (event) => {
    const action = props.actionCreator(event.target.value)
    props.dispatch(action)
  }
  return (
    <textarea className={classes.TextArea} rows="2" placeholder={props.placeholder}  onChange={handleChange} value={props.newValue} required />
  )
}

export default TextArea
