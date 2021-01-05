import React from 'react'

import {connect} from "react-redux";
import UserPanel from "./UserPanel/UserPanel";
import {setAuth} from "../../../redux/authReducer";
import {authAPI} from "../../../api/api";


class UserPanelContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then(response => {
      if(!response.resultCode) {
        const {id, login, email} = response.data
        this.props.setAuth(id, login, email )
      } else {
        this.props.setAuth(0, null, null )
      }
    })
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

export default connect(mapStateToProps,{setAuth})(UserPanelContainer)
