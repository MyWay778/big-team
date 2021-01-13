import React from 'react'

import {connect} from "react-redux";
import { follow, getUsers, unfollow } from "../../../../redux/usersReducer";
import UsersCard from "./UsersCard/UsersCard";

class UsersCardContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.itemCount, this.props.currentPage)
    }

    handleSetCurrentPage = (number) => {
        this.props.getUsers(this.props.itemCount, number) ///!!!
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
        users: state.usersReducer.users,
        itemCount: state.usersReducer.itemCount,
        pageCount: state.usersReducer.pageCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading,
        followingBtnBlock: state.usersReducer.followingBtnBlock
    }
}

export default connect(mapStateToProps, { follow, unfollow, getUsers, })(UsersCardContainer)


