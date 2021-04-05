import React from 'react'
import {Field} from "formik";

const makeField = (name, placeholder, type, component, onChange, onBlur, value, id) => {
    return <Field   name = {name}
                    id = {id || ''}
                    type= {type || 'text'}
                    component = {component || 'input'}
                    placeholder = {placeholder || ''}
                    onChange = {onChange}
                    onBlur = {onBlur}
                    value = {value}/>
}

export default makeField