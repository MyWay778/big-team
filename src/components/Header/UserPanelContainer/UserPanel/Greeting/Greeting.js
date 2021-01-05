import React from 'react'
import classes from './Greeting.module.css'

const Greeting = props => {
  return (
    <div className={classes.greeting}>
      Привет,<span className={classes.greeting__username}>&nbsp;{props.name}!</span>
    </div>
  )
}

export default Greeting
