import React from 'react'

import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsLoadingAC,
    setPageCountAC,
    showMoreAC,
    unfollowAC
} from "../../../../redux/usersReducer";
import * as axios from "axios";
import UsersCard from "./UsersCard/UsersCard";

class UsersCardContainer extends React.Component {

    componentDidMount() {
        this.props.handlers.handleSetIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemCount}&page=${this.props.currentPage}`)
            .then(response  => {
                this.props.handlers.handleShowMore(response.data.items)
                const pageCount = Math.ceil(response.data.totalCount / this.props.itemCount)
                this.props.handlers.handleSetPageCount(pageCount)
                this.props.handlers.handleSetIsLoading(false)
            })
    }
    handleSetCurrentPage = (number) => {
        this.props.handlers.handleSetIsLoading(true)
        this.props.handlers.handleSetCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemCount}&page=${number}`)
            .then(response  => {
                this.props.handlers.handleShowMore(response.data.items)
                this.props.handlers.handleSetIsLoading(false)
            })
    }
    render() {
        const handlers = {
            handleFollow: this.props.handlers.handleFollow,
            handleUnfollow: this.props.handlers.handleUnfollow,
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

const mapDispatchToProps = (dispatch) => {
    return {
        handlers: {
            handleFollow: (userId) => {
                dispatch(followAC(userId))
            },
            handleUnfollow: (userId) => {
                dispatch(unfollowAC(userId))
            },
            handleShowMore: (newUsers) => {
                dispatch(showMoreAC(newUsers))
            },
            handleSetCurrentPage: (newCurrentPage) => {
                dispatch(setCurrentPageAC(newCurrentPage))
            },
            handleSetPageCount: (newPageCount) => {
                dispatch(setPageCountAC(newPageCount))
            },
            handleSetIsLoading: (isLoading) => {
                dispatch(setIsLoadingAC(isLoading))
            }

        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersCardContainer)


