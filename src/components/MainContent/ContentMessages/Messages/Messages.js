import React from 'react'
import HeaderFour from '../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'

import classes from './Messages.module.css'
import MessagesList from './MessagesList/MessagesList'

const Messages = () => {
  return (
    <div className={classes.messages}>
      <HeaderFour text="Сообщения" />
      <MessagesList />
    </div>
  )
}

export default Messages
