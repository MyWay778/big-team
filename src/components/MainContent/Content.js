import React from 'react'

import classes from './Content.module.css'
import ContentMessages from './ContentMessages/ContentMessages'
import ContentProfile from './ContentProfile/ContentProfile'
import {Route} from 'react-router-dom'

const Content = (props) => {
  return (
    <div className={classes.content}>
        <Route path="/profile" render={() => <ContentProfile posts={props.posts}/>}/>
        <Route path="/messages" render={() =>  <ContentMessages dialogsData={props.dialogsData}/>}/>
    </div>
  )
}

export default Content
