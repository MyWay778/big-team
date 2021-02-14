import React, {useEffect} from 'react'
import userCardAvaImg from '../../../../../static/user.svg'
import Ava from './Ava/Ava'
import TextBlock from './TextBlock/TextBlock'

const MainInfo = props => {
    const textBlockProps = {
        name: props.name,
        aboutMe: props.aboutMe,
        userStatus: props.userStatus,
        sendStatus: props.sendStatus,
        myPage: props.myPage
    }
  return (
    <div>
      <Ava img={props.photo || userCardAvaImg} myPage={props.myPage} changePhotoHandler={props.changePhoto}/>
      <TextBlock {...textBlockProps}/>
    </div>
  )
}

export default MainInfo
