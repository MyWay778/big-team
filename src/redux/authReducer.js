import {authAPI} from "../api/api";

const
    SET_AUTH = "bg-team/authReducer/SET_AUTH",
    SET_BACKEND_MESSAGE_CODE = "bg-team/authReducer/SET_BACKEND_MESSAGE_CODE"

let initialState = {
    user: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    backendMessageCode: null
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
        default :
            return state
    }
}

const setAuth = (id, login, email) => ({type: SET_AUTH, user: {id, login, email}})
const setBackendMessageCode= (code) => ({type: SET_BACKEND_MESSAGE_CODE, code})

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

export const signIn = (values) => {
    return (dispatch) => {
        authAPI.signIn(values).then( response => {
            if (!response.resultCode) {
                dispatch(auth())
                dispatch(setBackendMessageCode(0))
            }else {
                dispatch(setBackendMessageCode(response.resultCode))
            }
        })
    }
}
export const signOut = () => {
    return (dispatch) => {
        authAPI.signOut().then( response => {
            if(!response.resultCode) {
                dispatch(auth())
            }
        })
    }
}

export const resetBackendMessageCode = () => {
    return (dispatch) => {
        dispatch(setBackendMessageCode(null))
    }
}

export default authReducer