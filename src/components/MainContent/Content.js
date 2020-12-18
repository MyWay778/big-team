import React from 'react'

import classes from './Content.module.css'
import ContentMessages from './ContentMessages/ContentMessages'
import ContentProfile from './ContentProfile/ContentProfile'
import {Route} from 'react-router-dom'

const Content = () => {
  return (
    <div className={classes.content}>
        <Route path="/profile" component={ContentProfile}/>
        <Route path="/messages" component={ContentMessages}/>
      {/*<ContentMessages />*/}
      {/* <ContentProfile /> */}
    </div>
  )
}

export default Content
