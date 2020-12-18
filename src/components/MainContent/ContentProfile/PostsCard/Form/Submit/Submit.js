import React from 'react'
import classes from './Submit.module.css'

const Submit = props => {
  return <input className={classes.submit} type="submit" value={props.text} />
}

export default Submit
