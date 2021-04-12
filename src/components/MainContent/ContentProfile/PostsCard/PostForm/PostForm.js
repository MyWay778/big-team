import React from 'react'
import classes from './PostForm.module.css'
import {Field, Formik} from "formik";

const PostForm = props => {
    return (
        <Formik initialValues={{post: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    props.handleSubmit(values.post)
                    setSubmitting(false)
                }}
        >{
            ({
                 values,
                 handleChange,
                 handleSubmit,
                 handleBlur,
                 isSubmitting
             }
            ) => (
                <form className={classes.form} name="writePost" onSubmit={handleSubmit}>
                    <Field
                        className={classes.textArea}
                        type="textarea"
                        name="post"
                        placeholder="Что нового?"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.post}
                        autoComplete="off"
                    />
                    <input
                        className={classes.submit}
                        type="submit"
                        value="Поделиться"
                        disabled={isSubmitting}
                    />
                </form>
            )
        }
        </Formik>
    )
}

export default PostForm
