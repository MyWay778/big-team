import React from 'react'

import classes from './Message.module.css'

const Message = props => {
  return <li className={`${classes.message} ${props.out ? classes.out : ''}`}><span>{props.text}</span></li>
}

export default Message
