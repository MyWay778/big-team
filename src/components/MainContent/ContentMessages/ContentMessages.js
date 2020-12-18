import React from 'react'

import classes from './ContentMessages.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const ContentMessages = () => {
  return (
    <div className={classes.contentMessages}>
      <Dialogs />
      <Messages />
    </div>
  )
}

export default ContentMessages
