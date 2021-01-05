import React from 'react'
import userCardAvaImg from '../../../../../static/user.svg'
import Ava from './Ava/Ava'
import TextBlock from './TextBlock/TextBlock'

const MainInfo = props => {
  return (
    <div>
      <Ava img={props.photo || userCardAvaImg} />
      <TextBlock name={props.name} status={props.status}/>
    </div>
  )
}

export default MainInfo
