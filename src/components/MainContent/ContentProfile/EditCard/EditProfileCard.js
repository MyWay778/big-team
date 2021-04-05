import React from 'react'
import classes from './EditProfileCard.module.css'
import {ErrorMessage, Field, Formik} from "formik";

const EditProfileCard = props => {
    return (
        <div className={classes.editProfileCard}>
            <h5>Editing...</h5>
            <Formik
                initialValues={{
                    fullName: props.userData.fullName,
                    aboutMe: props.userData.aboutMe,
                    lookingForAJob: props.userData.lookingForAJob,
                    lookingForAJobDescription: props.userData.lookingForAJobDescription,
                    contacts: {
                        github: props.userData.contacts.github
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
                        <label htmlFor='fullName'>Имя:
                        <Field
                            name="fullName"
                            id="fullName"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}/>
                        </label>
                        <Field
                            name="aboutMe"
                            component="textarea"
                            placeholder="about me"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values. aboutMe}/>
                            <label><Field name="lookingForAJob" type="checkbox"/> Ищу работу</label>
                        <Field
                            name="lookingForAJobDescription"
                            component="textarea"
                            placeholder="Your skills"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lookingForAJobDescription}
                        /><Field
                            name="contacts.github"
                            type="text"
                            placeholder="github"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.github}
                        />
                        {errors["contacts.github"] ? <div>{errors["contacts.github"]}</div> : null}
                        <input type="submit" value="Сохранить"/>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}

export default EditProfileCard