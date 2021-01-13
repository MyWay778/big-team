import React from 'react'

import classes from './Content.module.css'

import ContentProfileContainer from './ContentProfile/ContentProfileContainer'
import {Route} from 'react-router-dom'
import ContentMessages from "./ContentMessages/ContentMessages";
import UsersContent from "./UsersContent/UsersContent";
import Login from "./Login/Login";

const Content = () => {
    return (
        <div className={classes.content}>
            <Route path="/profile/:userId?" render={() => <ContentProfileContainer />} />
            <Route path="/messages" render={() => <ContentMessages />} />
            <Route path="/users" render={() => <UsersContent />} />
            <Route path="/login" render={() => <Login />} />
        </div>
    )
}

export default Content
