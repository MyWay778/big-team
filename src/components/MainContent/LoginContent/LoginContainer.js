import React from 'react'
import classes from "./LoginContainer.module.css"
import LoginCard from "./LoginCard/LoginCard";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"
import {getCaptcha, resetBackendMessageCode, signIn} from "../../../redux/authReducer";

class LoginContent extends React.Component {
    componentWillUnmount() {
        this.props.resetBackendMessageCode()
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to="/profile"/>
        }
        return (
            <div className={classes.loginContent}>
                <LoginCard signInHandler={this.props.signIn}
                           backendMessageCode={this.props.backendMessageCode}
                           captchaUrl={this.props.captchaUrl}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        backendMessageCode: state.authReducer.backendMessageCode,
        captchaUrl: state.authReducer.captchaUrl
    }
}

export default connect(mapStateToProps, {signIn, resetBackendMessageCode})(LoginContent)