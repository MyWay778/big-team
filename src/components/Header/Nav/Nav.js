import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.headerNav}>
      <span className={classes.dummy}>Новости</span>
      <NavLink to="/about" activeClassName={classes.active}>О проекте</NavLink>
    </nav>
  )
}

export default Nav
