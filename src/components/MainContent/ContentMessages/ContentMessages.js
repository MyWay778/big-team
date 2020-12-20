import React from 'react'

import classes from './ContentMessages.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'
import WriteMessage from "./WriteMessage/WriteMessage";

const ContentMessages = () => {
  return (
    <div className={classes.contentMessages}>
      <Dialogs />
      <Messages />
      <WriteMessage />
    </div>
  )
}

export default ContentMessages
