import React from 'react'

import s from './NavAside.module.css'
import Nav from './Nav/Nav'
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const NavAside = () => {
  return (
    <nav className={s.navAside}>
      <Nav />
      <FriendsListContainer />
    </nav>
  )
}

export default NavAside
