import {authAPI, securityAPI} from "../api/api";

const
    SET_AUTH = "bg-team/authReducer/SET_AUTH",
    SET_BACKEND_MESSAGE_CODE = "bg-team/authReducer/SET_BACKEND_MESSAGE_CODE",
    SET_CAPTCHA_URL = "bg-team/authReducer/SET_CAPTCHA_URL"

let initialState = {
    user: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    backendMessageCode: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH :
            return {
                ...state,
                user: action.user,
                isAuth: (!!action.user.id)
            }
        case SET_BACKEND_MESSAGE_CODE :
            return {
                ...state,
                backendMessageCode: action.code
            }
        case SET_CAPTCHA_URL :
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    }
}

const setAuth = (id, login, email) => ({type: SET_AUTH, user: {id, login, email}})
const setBackendMessageCode= (code) => ({type: SET_BACKEND_MESSAGE_CODE, code})
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}})

export const auth = () => {
    return async (dispatch) => {
        const response =  await authAPI.authMe()
        if(!response.resultCode) {
            const {id, login, email} = response.data
            dispatch(setAuth(id, login, email ))
        } else {
            dispatch(setAuth(0, null, null ))
        }
        return response
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(response.url))
    }
}

export const signIn = (values) => {
    return async (dispatch) => {
       const response = await authAPI.signIn(values)
            console.log(response);
            if (!response.resultCode) {
                dispatch(auth())
                dispatch(setBackendMessageCode(0))
            }else {
                if (response.resultCode === 10) {
                    dispatch(getCaptcha())
                }
                dispatch(setBackendMessageCode(response.resultCode))
            }
    }
}
export const signOut = () => {
    return async (dispatch) => {
        const  response = await authAPI.signOut()
            if(!response.resultCode) {
                dispatch(auth())
            }
    }
}

export const resetBackendMessageCode = () => {
    return (dispatch) => {
        dispatch(setBackendMessageCode(null))
    }
}

export default authReducer