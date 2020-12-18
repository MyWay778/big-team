import React from 'react'
import Link from './Link/Link'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.headerNav}>
      <Link title="Новости" href="#" />
      <Link title="О проекте" href="#" />
    </nav>
  )
}

export default Nav
