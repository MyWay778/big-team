import React from 'react'

import classes from './UsersCard.module.css'
import UsersList from "./UsersList/UsersList";
import HeaderFour from "../../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import Preloader from "./Preloader/Preloader";
import Paginator from "./Paginator/Paginator";


const UsersCard = props => {
    const usersListHandlers = {
        handleFollow: props.handlers.handleFollow,
        handleUnfollow: props.handlers.handleUnfollow
    }
    return (
        <div className={classes.usersCard}>
            <HeaderFour text="Пользователи"/>
            <UsersList users={props.users}
                       handlers={usersListHandlers}
                       followingBtnBlock={props.followingBtnBlock}
                       isAuth={props.isAuth}
            />
            {props.isLoading ?
                <Preloader/> :
                undefined}
            <Paginator
                pageCount={props.pageCount}
                currentPage={props.currentPage}
                handleSetCurrentPage={props.handlers.handleSetCurrentPage}
            />
        </div>
    )
}

export default UsersCard
