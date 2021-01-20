import React from 'react'

import classes from "./SignInForm.module.css"

const SignInForm = props => {
    return (
            <form className={classes.form} name="signIn">
                <label className={classes.input}><span>Логин:</span> <input type="text" /></label>
                <label className={classes.input}><span>Пароль:</span>  <input type="password" /></label>
                <input className={classes.submit} type="submit" value="Войти"/>
            </form>
    )
}

export default SignInForm