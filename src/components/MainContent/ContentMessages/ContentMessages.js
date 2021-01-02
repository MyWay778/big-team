import React from 'react'

import classes from './ContentMessages.module.css'
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";

const ContentMessages = () => {
  return (
    <div className={classes.contentMessages}>
      <DialogsContainer />
      <MessagesContainer />
      <WriteMessageContainer />
    </div>
  )
}

export default ContentMessages
