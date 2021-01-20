import React from 'react'
import classes from "./LoginContainer.module.css"
import LoginCard from "./LoginCard/LoginCard";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"

class LoginContent extends React.Component {
    render() {
        if (this.props.isAuth) {
            return <Redirect to="/profile" />
        }
        return (
            <div className={classes.loginContent}>
                <LoginCard/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps,null)(LoginContent)