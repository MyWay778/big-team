import React from 'react'
import HeaderFour from '../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'

import classes from './Dialogs.module.css'
import List from './List/List'
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    if (!props.isAuth) {
        return <Redirect to="/login" />
    }
  return (
    <div className={classes.dialogs}>
      <HeaderFour textHeader={props.textHeader} />
      <List dialogsData={props.dialogsData}/>
    </div>
  )
}

export default Dialogs
