import React from 'react'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import Search from './Search/Search'

import logoImg from './static/logo.png'
import UserPanelContainer from "./UserPanelContainer/UserPanelContainer";

const Header = () => {
  return (
    <header className={classes.pageHeader}>
      <a href="/">
          <Logo img={logoImg} />
      </a>
      <Nav />
      <Search />
      <UserPanelContainer />
    </header>
  )
}

export default Header
