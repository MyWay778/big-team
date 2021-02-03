import React from 'react'
import classes from './TextArea.module.css'

const TextArea = (props) => {
  return (
    <textarea className={classes.TextArea} rows="2" placeholder={props.placeholder}  onChange={props.handleChange} value={props.newValue} required />
  )
}

export default TextArea
