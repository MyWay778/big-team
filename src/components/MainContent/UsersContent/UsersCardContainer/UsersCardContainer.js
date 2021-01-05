import React from 'react'

import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsLoading,
    setPageCount,
    showMore,
    unfollow
} from "../../../../redux/usersReducer";
import * as axios from "axios";
import UsersCard from "./UsersCard/UsersCard";
import {followAPI, usersAPI} from "../../../../api/api";

class UsersCardContainer extends React.Component {

    componentDidMount() {
        this.props.setIsLoading(true)
        usersAPI.getUsers(this.props.itemCount, this.props.currentPage)
            .then(response  => {
                this.props.showMore(response.items)
                const pageCount = Math.ceil(response.totalCount / this.props.itemCount)
                this.props.setPageCount(pageCount)
                this.props.setIsLoading(false)
            })
    }
    handleSetCurrentPage = (number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(number)
        usersAPI.getUsers(this.props.itemCount, number)
            .then(response  => {
                this.props.showMore(response.items)
                this.props.setIsLoading(false)
            })
    }
    handleFollow = (userId) => {
        followAPI.follow(userId)
        .then( response => {
            if (!response.resultCode) {
                this.props.follow(userId)
            }
        })
    }
    handleUnFollow = (userId) => {
        followAPI.unFollow(userId)
        .then( response => {
            if (!response.resultCode) {
                this.props.unfollow(userId)
            }
        })
    }
    render() {
        const handlers = {
            handleFollow: this.handleFollow,
            handleUnfollow: this.handleUnFollow,
            handleSetCurrentPage: this.handleSetCurrentPage
        }
        return <UsersCard
            users={this.props.users}
            handlers={handlers}
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            isLoading={this.props.isLoading}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        itemCount: state.usersReducer.itemCount,
        pageCount: state.usersReducer.pageCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading
    }
}

export default connect(mapStateToProps, {
        follow,
        unfollow,
        showMore,
        setCurrentPage,
        setPageCount,
        setIsLoading
    }
)(UsersCardContainer)


