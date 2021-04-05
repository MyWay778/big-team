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
            aboutMe: props.aboutMe,
            photo: props.photo,
            userStatus: props.userStatus,
            sendStatus: props.sendStatus,
            myPage: props.myPage,
            changePhoto: props.changePhoto,
            switchEditMode: props.switchEditMode
        }
        secondaryInfoProps = {
            isLookingForAJob: props.isLookingForAJob,
            additionalInfo: props.additionalInfo
        }
    }
    return (
        <section className={`${classes.userCard} ${classes.card}`}>
            {props.isLoading ? <Preloader/> :
                <>
                    <MainInfo {...mainInfoProps} />
                    <SecondaryInfo {...secondaryInfoProps}/>
                </>
            }
        </section>
    )
}

export default UserCard
