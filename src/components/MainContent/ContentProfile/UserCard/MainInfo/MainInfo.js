import React from 'react'
import userCardAvaImg from '../../../static/user-card-ava.jpg'
import Ava from './Ava/Ava'
import TextBlock from './TextBlock/TextBlock'

const MainInfo = () => {
  return (
    <div>
      <Ava img={userCardAvaImg} />
      <TextBlock />
    </div>
  )
}

export default MainInfo
