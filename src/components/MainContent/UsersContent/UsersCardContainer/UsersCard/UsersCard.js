import React from 'react'

import classes from './UsersCard.module.css'
import UsersList from "./UsersList/UsersList";
import HeaderFour from "../../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import PageSelector from "./PageSelector/PageSelector";
import Preloader from "./Preloader/Preloader";


const UsersCard = props => {
    const usersListHandlers = {
        handleFollow: props.handlers.handleFollow,
        handleUnfollow: props.handlers.handleUnfollow
    }
    return (
        <div className={classes.usersCard}>
            <HeaderFour text="Пользователи"/>
            <UsersList users={props.users} handlers={usersListHandlers}/>
            {props.isLoading ? <Preloader/> : undefined}
            <PageSelector
                pageCount={props.pageCount}
                currentPage={props.currentPage}
                handleSetCurrentPage={props.handlers.handleSetCurrentPage}
            />
        </div>
    )
}

export default UsersCard
