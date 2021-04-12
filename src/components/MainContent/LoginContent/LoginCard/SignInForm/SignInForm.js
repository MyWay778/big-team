import React, {useEffect, useRef, useState} from 'react'

import classes from "./SignInForm.module.css"
import {Field, Formik, useFormikContext} from "formik";

const validation = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'введите email'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'введен не корректный email'
    } else if (values.email.length > 64) {
        errors.email = 'недопустимая длина'
    }

    if (!values.password) {
        errors.password = 'введите пароль'
    } else if (values.password.length > 20) {
        errors.password = 'максимальная длина 20 символов'
    }
    return errors
}



const SignInForm = props => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
    })
    const autoFill = (evt) => {
        setInitialValues({
            email: 'sakla4onakne@yandex.ru',
            password: 'ivanov_ivan',
            rememberMe: false,
            captcha: ''
        })
    }
    return (
        <div className={classes.container}>
            <Formik initialValues={initialValues}
                    onSubmit={async (values, {setSubmitting, setStatus, setErrors}) => {
                        props.signInHandler(values)
                        setSubmitting(false)
                    }}
                    validate={validation}
                    enableReinitialize={true}
            >
                {({
                      values, errors,
                      touched,
                      status,
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      isSubmitting,
                      isValidating,
                      setStatus,
                    setErrors
                  }) => {
                    if (props.backendMessageCode === 1) {
                        if (status !== "Неверный логин и пароль" || !errors.email) {
                            setStatus("Неверный логин и пароль")
                            setErrors({email: true, password: true})
                        }

                    }
                    if(props.backendMessageCode === 10 && status!== "Введите код с картинки") {
                        setStatus("Введите код с картинки")
                        setErrors({})
                    }
                    return  <form className={classes.form} name="signIn" onSubmit={handleSubmit}>
                        {<div className={classes.status}>{status}</div>}
                        <Field
                            className={`
                                ${classes.field} 
                                ${errors.email && touched.email ? classes.fieldError : ''}
                                ${!errors.email && touched.email ? classes.fieldIsValidating : ''}
                            `}
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <div className={classes.error}>{errors.email && touched.email && errors.email}</div>
                        <Field
                            className={`
                                ${classes.field} 
                                ${errors.password && touched.password ? classes.fieldError : ''}
                                ${!errors.password && touched.password ? classes.fieldIsValidating : ''}
                            `}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <div className={classes.error}>{errors.password && touched.password && errors.password}</div>
                        <div className={classes.field}>
                            <label className={classes.checkbox}><Field className={classes.checkbox} type="checkbox" name="rememberMe"/> Запомнить</label>
                        </div>
                        {props.captchaUrl && <>
                            <img src={props.captchaUrl} />
                            <Field
                                className={classes.field}
                                type="text"
                                name="captcha"
                                placeholder="Введите символы с картинки"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.captcha}
                                autoComplete="off"
                            />
                            <div className={classes.error}>{errors.captcha && touched.captcha}</div>
                        </>}
                        <div className={classes.buttons}>
                            <button type="button" onClick={autoFill} className={classes.autoFill}>Заполнить</button>
                            <input className={classes.submit} type="submit" value="Войти" disabled={isSubmitting}/>
                        </div>
                    </form>
                    }
                }
            </Formik>

        </div>
    )
}

export default SignInForm