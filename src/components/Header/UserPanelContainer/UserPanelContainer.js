import React from 'react'

import {connect} from "react-redux";
import UserPanel from "./UserPanel/UserPanel";
import {signOut} from "../../../redux/authReducer";

class UserPanelContainer extends React.Component {
  render () {
    const userPanelProps = {
      isAuth: this.props.isAuth,
      name: this.props.name,
      id: this.props.id,
      signOut: this.props.signOut
    }
    return (
        <UserPanel {...userPanelProps} />
    )
  }
}
const mapStateToProps = state =>{
  return state.authReducer.isAuth ? {
    isAuth: state.authReducer.isAuth,
    name: state.authReducer.user.login,
    id: state.authReducer.user.id
  } :
      {
    isAuth: state.authReducer.isAuth
  }
}

export default connect(mapStateToProps,{signOut})(UserPanelContainer)
