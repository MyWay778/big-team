import React from 'react'
import MainInfo from './MainInfo/MainInfo'
import SecondaryInfo from './SecondaryInfo/SecondaryInfo'
import classes from './UserCard.module.css'

const UserCard = () => {
  return (
    <section className={`${classes.userCard} ${classes.card}`}>
      <MainInfo />
      <SecondaryInfo />
    </section>
  )
}

export default UserCard
