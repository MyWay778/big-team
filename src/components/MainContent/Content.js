import React from 'react'

import classes from './Content.module.css'
import ContentMessages from './ContentMessages/ContentMessages'
import ContentProfile from './ContentProfile/ContentProfile'
import {Route} from 'react-router-dom'

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={() => <ContentProfile postsData={props.state.postsData} dispatch={props.dispatch} />}/>
            <Route path="/messages" render={() => <ContentMessages dialogsData={props.state.dialogsData} dispatch={props.dispatch}/>}/>
        </div>
    )
}

export default Content
