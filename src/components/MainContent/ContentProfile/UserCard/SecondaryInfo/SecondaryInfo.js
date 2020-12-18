import React from 'react'
import classes from './SecondaryInfo.module.css'
import TableRow from './TableRow/TableRow'

const SecondaryInfo = () => {
  return (
    <div className={classes.secondaryInfo}>
      <table className={classes.secondaryInfo__text}>
        <tbody>
          <TableRow question="Образование" answer="Прикладная информатика, выпуск 2012" />
          <TableRow question="Университет" answer="МГУ" />
          <TableRow question="Школа" answer="№235" />
          <TableRow question="Веб-сайт" answer="www.allgood.ru" />
        </tbody>
      </table>
    </div>
  )
}

export default SecondaryInfo
