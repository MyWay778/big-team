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
                <label className={classes.editPhotoButton} htmlFor="file">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 10.2105V20H0V0.420944H10.5V2.37886H2.10001V18.0421H18.9V10.2105H21ZM7.35001 10.5139L15.7731 2.64513L17.4048 4.64317L8.88196 13.1473H7.35001V10.5139ZM5.25 15.1052H9.7818L20.1841 4.64513L15.8298 0L5.25 9.68771V15.1052Z"/>
                    </svg>
                </label>
                <input className={classes.file} type="file" name="file" id="file" onChange={handleChangePhoto}/>
            </>}
        </div>
    )
}

export default Ava
