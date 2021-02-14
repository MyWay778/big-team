import React from 'react'
import classes from './Ava.module.css'

const Ava = props => {
    const handleChangePhoto = (evt) => {
        const photo = new FormData()
        photo.append('image',evt.target.files[0])
        props.changePhotoHandler(photo)
    }

    return (
        <div className={classes.ava}>
            <img
                src={props.img}
                className={`${classes.ava__card} ${classes.ava_float}`}
                width="135"
                height="110"
                alt="Фото пользователя"
            />
            {props.myPage &&
            <>
                <label className={classes.editPhotoButton} htmlFor="file"></label>
                <input className={classes.file} type="file" name="file" id="file" onChange={handleChangePhoto}/>
            </>}
        </div>
    )
}

export default Ava
