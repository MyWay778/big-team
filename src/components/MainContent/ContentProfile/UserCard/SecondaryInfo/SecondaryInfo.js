import React from 'react'
import classes from './SecondaryInfo.module.css'
import TableRow from './TableRow/TableRow'

const SecondaryInfo = props => {
  return (
    <div className={classes.secondaryInfo}>
      <table className={classes.secondaryInfo__text}>
        <tbody>
          <TableRow question="Работа" answer={props.isLookingForAJob ? 'В поиске' : 'Не ищу'} />
          <TableRow question="Доп информация" answer={props.additionalInfo} />
        </tbody>
      </table>
    </div>
  )
}

export default SecondaryInfo
