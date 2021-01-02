import React from 'react'

import classes from './UsersCard.module.css'
import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import UsersListContainer from "./UserListContainer/UsersListContainer";




const UsersCard = () => {
  return (
    <div className={classes.usersCard}>
        <HeaderFour text="Пользователи" />
        <UsersListContainer />
    </div>
  )
}
export default UsersCard
