import React from 'react'
import HeaderFour from '../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'

import classes from './Dialogs.module.css'
import List from './List/List'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <HeaderFour text="Диалоги" />
      <List dialogsData={props.dialogsData}/>
    </div>
  )
}

export default Dialogs
