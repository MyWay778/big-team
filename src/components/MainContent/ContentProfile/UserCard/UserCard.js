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
            status:props.status,
            photo: props.photo
        }
        secondaryInfoProps = {
            isLookingForAJob: props.isLookingForAJob,
            additionalInfo: props.additionalInfo
        }
    }
        let output = props.isLoading ?
                <Preloader /> :
                props.showAuthPage ?
                <p>Please authorization</p> :
                [<MainInfo key={0} {...mainInfoProps} />, <SecondaryInfo key={1} {...secondaryInfoProps}/>]
  return (
    <section className={`${classes.userCard} ${classes.card}`}>
        {output}
    </section>
  )
}

export default UserCard
