import React from 'react'

import classes from './ContentMessages.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'
import WriteMessage from "./WriteMessage/WriteMessage";

const ContentMessages = (props) => {
  return (
    <div className={classes.contentMessages}>
      <Dialogs dialogsData={props.dialogsData}/>
      <Messages messagesData={props.dialogsData[0].messages}/>
      <WriteMessage />
    </div>
  )
}

export default ContentMessages
