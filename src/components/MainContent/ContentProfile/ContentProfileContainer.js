import React from 'react'

import classes from './ContentProfile.module.css'
import UserCard from './UserCard/UserCard'
import AdditionCard from './AdditionCard/AdditionCard'
import {connect} from "react-redux";
import {setIsLoading, setUser, showAuthPage} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";


class ContentProfile extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true)
        let userId = this.props.match.params.userId || this.props.authUser
        if (userId) {
            profileAPI.getProfile(userId)
                .then(response => {
                    this.props.setUser(response)
                    this.props.setIsLoading(false)
                })
        }
    }

    componentDidUpdate() {
        if (!(this.props.match.params.userId) && this.props.authUser) {
            this.props.showAuthPage(false)
            profileAPI.getProfile(this.props.authUser)
                .then(response => {
                    this.props.setUser(response)
                    this.props.setIsLoading(false)
                })
        } else if (!(this.props.match.params.userId) && (this.props.authUser === 0)) {
            this.props.showAuthPage(true)
            this.props.setIsLoading(false)
        }
        if(this.props.user && this.props.isLoading) {
        }
    }
    componentWillUnmount() {
        this.props.showAuthPage(false)
    }

    render() {
        let userCardProps, additionCardProps
        if (this.props.user) {
            userCardProps = {
                name: this.props.user.fullName,
                status: this.props.user.aboutMe,
                photo: this.props.user.photos.small,
                isLookingForAJob: this.props.user.lookingForAJob,
                additionalInfo: this.props.user.lookingForAJobDescription,
            }
            additionCardProps = {
                contacts: this.props.user.contacts
            }

        }
        return (
            <div className={classes.contentProfile}>
                <UserCard
                    showAuthPage={this.props.isShowAuthPage}
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
        isShowAuthPage: state.profilePage.showAuthPage
    }
}
export default connect(mapStateToProps, {setUser, setIsLoading, showAuthPage})(withRouter(ContentProfile))
