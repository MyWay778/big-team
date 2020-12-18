import React from 'react'
import classes from './Logo.module.css'

const Logo = props => {
  return (
    <div className={classes.pageHeader__logo}>
      <img src={props.img} className={classes.logo} alt="BigTeam logo" />
    </div>
  )
}

export default Logo
