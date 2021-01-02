import React from 'react'
import Message from './Message/Message'

import classes from './MessagesList.module.css'
import defaultImg from '../../static/user.svg'
import myMessageImg from  '../../../static/user-ava.jpg'

const MessagesList = (props) => {
  return (
    <ul className={classes.messagesList}>
        {
            props.messagesData.map(message => <Message key={message.id} out={message.out} text={message.text}
                                                       img={message.out ? myMessageImg : defaultImg}/>)
        }
    </ul>
  )
}

export default MessagesList
