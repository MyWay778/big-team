import React from 'react'
import {Field, Formik} from "formik";
import classes from "../../../ContentProfile/PostsCard/PostForm/PostForm.module.css";

const WriteMessageForm = props => {
    return (
        <div>
            <Formik initialValues={{message: ''}} onSubmit={
                (values, {setSubmitting}) => {
                    console.log(values)
                    setSubmitting(false)
                }
            }>{
                ({
                     values,
                     touched,
                     handleChange,
                     handleSubmit,
                     handleBlur,
                     isSubmitting
                 }) => (
                    <form className={""} name="writeMessage" onSubmit={handleSubmit}>
                        <Field
                            className={""}
                            type="textarea"
                            name="message"
                            placeholder="Написать"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        <input
                            className={classes.submit}
                            type="submit"
                            value="Отправить"
                            disabled={isSubmitting}
                        />
                    </form>
                )
            }
            </Formik>
        </div>
    )
}