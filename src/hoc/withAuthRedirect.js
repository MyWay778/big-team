import React from 'react'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

const withAuthRedirect = Component => {
    const mapStateToProps = state => ({isAuth: state.authReducer.isAuth})

    const withAuthRedirectComponent = props => {
        if (!props.isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...props} />
    }
    return connect(mapStateToProps)(withAuthRedirectComponent)
}

export default withAuthRedirect