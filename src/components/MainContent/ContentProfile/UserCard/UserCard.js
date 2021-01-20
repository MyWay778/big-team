import React from 'react'
import MainInfo from './MainInfo/MainInfo'
import SecondaryInfo from './SecondaryInfo/SecondaryInfo'
import classes from './UserCard.module.css'
import Preloader from "../../UsersContent/UsersCardContainer/UsersCard/Preloader/Preloader";

const UserCard = props => {
    let mainInfoProps = null
    let secondaryInfoProps = null

    if (!props.isLoading) {
        mainInfoProps = {
            name: props.name,
            aboutMe:props.aboutMe,
            photo: props.photo,
            userStatus: props.userStatus,
            sendStatus: props.sendStatus,
            myPage: props.myPage
        }
        secondaryInfoProps = {
            isLookingForAJob: props.isLookingForAJob,
            additionalInfo: props.additionalInfo
        }
    }
        let output = props.isLoading ?
                <Preloader /> :
                [<MainInfo key={0} {...mainInfoProps} />, <SecondaryInfo key={1} {...secondaryInfoProps}/>]
  return (
    <section className={`${classes.userCard} ${classes.card}`}>
        {output}
    </section>
  )
}

export default UserCard
