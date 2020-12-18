import React from 'react'
import HeaderFour from '../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'

import classes from './Dialogs.module.css'
import List from './List/List'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <HeaderFour text="Диалоги" />
      <List />
    </div>
  )
}

export default Dialogs
