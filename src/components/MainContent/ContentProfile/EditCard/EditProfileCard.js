import React from 'react'
import classes from './EditProfileCard.module.css'
import {Field, Formik} from "formik";
import HeaderFour from "../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import classNames from 'classnames/bind';

const cn = classNames.bind(classes);

const EditProfileCard = props => {
    return (
        <div className={classes.editProfileCard}>
            <HeaderFour text="Редактирование профиля"/>
            <Formik
                initialValues={{
                    fullName: props.userData.fullName,
                    aboutMe: props.userData.aboutMe,
                    lookingForAJob: props.userData.lookingForAJob,
                    lookingForAJobDescription: props.userData.lookingForAJobDescription,
                    contacts: {
                        github: props.userData.contacts.github,
                        facebook: props.userData.contacts.facebook,
                        instagram: props.userData.contacts.instagram,
                        vk: props.userData.contacts.vk
                    }
                }}
                validate={() => ({})}
                onSubmit={async (values, actions) => {
                    const response = await props.handleSaveChanges(values, props.userData.userId)
                    if(response) {
                        const errors = {}
                        response.forEach(message => {
                            const messageTarget = `contacts.${message.match(/(?<=->)\w+/i)}`.toLowerCase()
                            errors[messageTarget] = 'Неверный адрес'
                        })
                        actions.setErrors(errors)
                    }
                    // actions.setSubmitting(false)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      isSubmitting
                  }) => (
                    <form className={classes.editProfileForm} onSubmit={handleSubmit}>
                        <label className={classes.label} htmlFor='fullName'>
                            <span>Имя:</span>
                        <Field
                            className={classes.field}
                            name="fullName"
                            id="fullName"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                            autoComplete="off"
                        />
                        </label>
                        <label className={classes.label} htmlFor='aboutMe'>
                            <span>О себе:</span>
                        <Field
                            className={cn(classes.field, classes.field_about, classes.textarea)}
                            name="aboutMe"
                            id="aboutMe"
                            component="textarea"
                            placeholder="about me"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values. aboutMe}/>
                        </label>
                            <label className={cn(classes.label, classes.checkbox)}><Field name="lookingForAJob" type="checkbox"/> Ищу работу</label>
                        <label className={classes.label}>
                            <span>Навыки: </span>
                            <Field
                                className={cn(classes.field, classes.field_about, classes.textarea)}
                                name="lookingForAJobDescription"
                                component="textarea"
                                placeholder="Your skills"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lookingForAJobDescription}
                            />
                        </label>
                        <h5 className={classes.contactsHeader}>Контакты:</h5>
                        <label className={classes.label}>
                            <span>Facebook:</span>
                            <Field
                                className={cn(classes.field)}
                                name="contacts.facebook"
                                type="text"
                                placeholder="facebook"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contacts.facebook || ""}
                            />
                        </label>
                        <label className={classes.label}>
                            <span>GitHub:</span>
                       <Field
                           className={cn(classes.field)}
                            name="contacts.github"
                            type="text"
                            placeholder="github"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.github || ""}
                        />
                        </label>
                        <label className={classes.label}>
                            <span>Instagram:</span>
                            <Field
                                className={cn(classes.field)}
                                name="contacts.instagram"
                                type="text"
                                placeholder="instagram"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contacts.instagram || ""}
                            />
                        </label>
                        <label className={classes.label}>
                            <span>VK:</span>
                            <Field
                                className={cn(classes.field)}
                                name="contacts.vk"
                                type="text"
                                placeholder="vk"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contacts.vk || ""}
                            />
                        </label>
                        {errors["contacts.github"] ? <div>{errors["contacts.github"]}</div> : null}
                        <div className={classes.buttons}>
                            <button className={classes.cancel} type="button" onClick={props.switchEditMode}>Отмена</button>
                            <input className={classes.submit} type="submit" value="Сохранить"/>
                        </div>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}

export default EditProfileCard