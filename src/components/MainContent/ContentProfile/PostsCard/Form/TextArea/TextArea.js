import React from 'react'
import classes from './TextArea.module.css'

const TextArea = () => {
  return (
    <textarea className={classes.TextArea} rows="2" placeholder="Что нового?" required></textarea>
  )
}

export default TextArea