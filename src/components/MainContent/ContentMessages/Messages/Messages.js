import React from 'react'
import HeaderFour from '../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'

import classes from './Messages.module.css'
import MessagesList from './MessagesList/MessagesList'

const Messages = (props) => {
  return (
    <div className={classes.messages}>
      <HeaderFour text={props.textHeader} />
      <MessagesList messagesData={props.messagesData}/>
    </div>
  )
}

export default Messages
