import React from 'react'

import classes from './Content.module.css'

import ContentProfileContainer from './ContentProfile/ContentProfileContainer'
import {Route} from 'react-router-dom'
import UsersContent from "./UsersContent/UsersContent";
import LoginContainer from "./LoginContent/LoginContainer";
import ContentMessages from "./ContentMessages/ContentMessages";

const Content = () => {
    return (
        <div className={classes.content}>
            <Route path="/profile/:userId?" render={() => <ContentProfileContainer />} />
            <Route path="/messages" render={() => <ContentMessages />} />
            <Route path="/users" render={() => <UsersContent />} />
            <Route path="/login" render={() => <LoginContainer />} />
        </div>
    )
}

export default Content
