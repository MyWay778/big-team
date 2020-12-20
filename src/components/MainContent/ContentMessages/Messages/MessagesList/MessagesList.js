import React from 'react'
import Message from './Message/Message'

import classes from './MessagesList.module.css'

const MessagesList = () => {
  return (
    <ul className={classes.messagesList}>
      <Message text="Привет, как дела?" />
      <Message out={true} text="Отлично как у тебя?" />
    </ul>
  )
}

export default MessagesList
