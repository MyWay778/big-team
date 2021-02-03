import React from 'react'

import classes from "./LoginCard.module.css"

import SignInForm from "./SignInForm/SignInForm";
import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const LoginCard = props => {
    return (
        <section className={classes.loginCard}>
            <HeaderFour text="Вход" />
            <SignInForm
                signInHandler={props.signInHandler}
                backendMessageCode={props.backendMessageCode}
            />
        </section>
    )
}

export default LoginCard