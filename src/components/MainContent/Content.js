import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import classes from './Content.module.css'
import makeSuspense from "../../hoc/makeSuspense";

const UsersContent = React.lazy(() => import("./UsersContent/UsersContent"))
const ContentProfileContainer = React.lazy(() => import("./ContentProfile/ContentProfileContainer"))
const ContentMessages = React.lazy(() => import("./ContentMessages/ContentMessages"))
const LoginContainer = React.lazy(() => import("./LoginContent/LoginContainer"))
const About = React.lazy(() => import("./About/About"))

const Content = () => {
    return (
        <div className={classes.content}>
            <Redirect from="/" to="/about"/>
            <Route exact path="/about" render={makeSuspense(About)}/>
            <Route path="/profile/:userId?" render={makeSuspense(ContentProfileContainer)} />
            <Route path="/messages" render={makeSuspense(ContentMessages)} />
            <Route path="/users" render={makeSuspense(UsersContent)} />
            <Route path="/login" render={makeSuspense(LoginContainer)} />
        </div>
    )
}

export default Content
