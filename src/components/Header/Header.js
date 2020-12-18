import React from 'react'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import Search from './Search/Search'
import UserPanel from './UserPanel/UserPanel'

import logoImg from './static/logo.png'

const Header = () => {
  return (
    <header className={classes.pageHeader}>
      <Logo img={logoImg} />
      <Nav />
      <Search />
      <UserPanel />
    </header>
  )
}

export default Header
