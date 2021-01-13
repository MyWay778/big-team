import React from 'react'

import {connect} from "react-redux";
import UserPanel from "./UserPanel/UserPanel";
import {auth} from "../../../redux/authReducer";

class UserPanelContainer extends React.Component {
  componentDidMount() {
    this.props.auth()
  }
  render () {
    const userPanelProps = {
      isAuth: this.props.isAuth,
      name: this.props.name,
      id: this.props.id
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
    isAuth: state.authReducer.isAuth,
  }
}

export default connect(mapStateToProps,{auth})(UserPanelContainer)
