import React from 'react'

import classes from './Message.module.css'

const Message = props => {
  return <li className={props.direction}>{props.text}</li>
}

export default Message
