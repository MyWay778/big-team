import React from 'react'

import {connect} from "react-redux";
import { follow, requestUsers, unfollow } from "../../../../redux/usersReducer";
import UsersCard from "./UsersCard/UsersCard";
import {
    getFollowingBtnBlock,
    getIsLoading,
    getItemCount,
    getPage,
    getPageCount,
    getUsers
} from "../../../../redux/usersSelectors";

class UsersCardContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.itemCount, this.props.currentPage)
    }

    handleSetCurrentPage = (number) => {
        this.props.requestUsers(this.props.itemCount, number) ///!!!
    }

    render() {
        const handlers = {
            handleFollow: this.props.follow,
            handleUnfollow: this.props.unfollow,
            handleSetCurrentPage: this.handleSetCurrentPage
        }
        return <UsersCard
            users={this.props.users}
            handlers={handlers}
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            isLoading={this.props.isLoading}
            followingBtnBlock={this.props.followingBtnBlock}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        itemCount: getItemCount(state),
        pageCount: getPageCount(state),
        currentPage: getPage(state),
        isLoading: getIsLoading(state),
        followingBtnBlock: getFollowingBtnBlock(state)
    }
}

export default connect(mapStateToProps, { follow, unfollow, requestUsers, })(UsersCardContainer)


