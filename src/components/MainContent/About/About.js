import React from 'react'
import HeaderFour from "../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import classes from './About.module.css'

const About  = () => {
    return (
        <section className={classes.about}>
            <div className={classes.wrapper}>
                <HeaderFour text={'О проекте'}/>
                <p className={classes.paragraph}>
                    Привет! Это мой учебный проект выполненый по курсу "React JS - путь самурая 1.0".
                </p>
                <h5 className={classes.techList}>Стек технологий</h5>
                <ul className={classes.list}>
                    <li>
                        React
                    </li>
                    <li>
                        Redux
                    </li>
                    <li>
                        flux, thunk, axios, css-modules, classnames
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About