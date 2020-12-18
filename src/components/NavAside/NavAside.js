import React from 'react'

import s from './NavAside.module.css'
import Nav from './Nav/Nav'

const NavAside = () => {
  return (
    <nav className={s.navAside}>
      <Nav />
    </nav>
  )
}

export default NavAside
