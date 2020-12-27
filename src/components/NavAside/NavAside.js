import React from 'react'

import s from './NavAside.module.css'
import Nav from './Nav/Nav'
import FriendsList from "./FriendsList/FriendsList";

const NavAside = (props) => {
  return (
    <nav className={s.navAside}>
      <Nav />
      <FriendsList state={props.state}/>
    </nav>
  )
}

export default NavAside
