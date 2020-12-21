import React from 'react'
import Message from './Message/Message'

import classes from './MessagesList.module.css'

const MessagesList = (props) => {
  return (
    <ul className={classes.messagesList}>
        {
            props.messagesData.map(message => <Message key={message.id} out={message.out} text={message.text} />)
        }
    </ul>
  )
}

export default MessagesList
