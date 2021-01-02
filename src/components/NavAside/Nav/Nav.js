import React from 'react'

import profileIconImg from '../static/profile-icon.svg'
import messagesIconImg from '../static/messages-icon.svg'
import friendIconImg from '../static/friends-icon.svg'
import musicIconImg from '../static/music-icon.svg'
import settingsIconImg from '../static/settings-icon.svg'

import s from './Nav.module.css'
import Item from './Item/Item'

const Nav = () => {
  return (
    <ul className={s.nav}>
      <Item img={profileIconImg} title="Профиль" href="/profile"/>
      <Item img={messagesIconImg} title="Сообщения" href="/messages"/>
      <Item img={friendIconImg} title="Поиск друзей" href="/users"/>
      <Item img={musicIconImg} title="Музыка" href="#"/>
      <Item img={settingsIconImg} title="Настройки" href="#"/>
    </ul>
  )
}

export default Nav
