import React from 'react'
import {Route} from 'react-router-dom'
import classes from './Content.module.css'
import makeSuspense from "../../hoc/makeSuspense";

const UsersContent = React.lazy(() => import("./UsersContent/UsersContent"))
const ContentProfileContainer = React.lazy(() => import("./ContentProfile/ContentProfileContainer"))
const ContentMessages = React.lazy(() => import("./ContentMessages/ContentMessages"))
const LoginContainer = React.lazy(() => import("./LoginContent/LoginContainer"))

const Content = () => {
    return (
        <div className={classes.content}>
            <Route path="/profile/:userId?" render={makeSuspense(ContentProfileContainer)} />
            <Route path="/messages" render={makeSuspense(ContentMessages)} />
            <Route path="/users" render={makeSuspense(UsersContent)} />
            <Route path="/login" render={makeSuspense(LoginContainer)} />
        </div>
    )
}

export default Content
