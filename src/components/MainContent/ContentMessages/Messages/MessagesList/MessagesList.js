import React from 'react'
import Message from './Message/Message'

import classes from './MessagesList.module.css'

const MessagesList = () => {
  return (
    <ul>
      <Message direction="in" text="Привет, как дела?" />
      <Message direction="out" text="Отлично как у тебя?" />
    </ul>
  )
}

export default MessagesList
