import React from 'react'

import classes from './ContentProfile.module.css'
import UserCard from './UserCard/UserCard'
import AdditionCard from './AdditionCard/AdditionCard'
import {connect} from "react-redux";
import {getProfile, sendStatus} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ContentProfile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authUser
        if (userId) {
            this.props.getProfile(userId)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.getProfile(this.props.authUser)
        }
    }

    render() {
        let userCardProps, additionCardProps
        if (this.props.user) {
            userCardProps = {
                name: this.props.user.fullName,
                aboutMe: this.props.user.aboutMe,
                photo: this.props.user.photos.small,
                isLookingForAJob: this.props.user.lookingForAJob,
                additionalInfo: this.props.user.lookingForAJobDescription,
                userStatus: this.props.userStatus,
                sendStatus: this.props.sendStatus,
                myPage: !this.props.match.params.userId
            }
            additionCardProps = {
                contacts: this.props.user.contacts
            }

        }
        return (
            <div className={classes.contentProfile}>
                <UserCard
                    isLoading={this.props.isLoading}
                    {...userCardProps} />
                <AdditionCard isLoading={this.props.isLoading} {...additionCardProps} />
                {/*<PostsCardContainer isLoading={this.props.isLoading} />*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.profilePage.user,
        authUser: state.authReducer.user.id,
        isLoading: state.profilePage.isLoading,
        isAuth: state.authReducer.isAuth,
        userStatus: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, sendStatus}),
    withRouter,
    withAuthRedirect,
)(ContentProfile)
