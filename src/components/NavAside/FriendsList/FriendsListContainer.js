import React from 'react'
import userAva from '../../../static/user.svg'
import FriendsList from "./FriendsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.friendsReducer || [],
        img: userAva
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer