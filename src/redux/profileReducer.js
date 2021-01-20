import {profileAPI} from "../api/api";

const
WRITING_POST = "WRITING-POST",
ADD_POST = "ADD-POST",
SET_USER = "SET_USER",
SET_IS_LOADING = "SET_IS_LOADING",
SET_STATUS = "SET_STATUS"

let initialState = {
    user: undefined,
    status: null,
    posts: [
        {id: 1, message: 'Всем привет!) Как у вас дела???'},
        {id: 2, message: 'У меня все ОК!'}
    ],
    newPostValue: '',
    isLoading: false,
    showAuthPage: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITING_POST :
            return {
                ...state,
                newPostValue: action.newText
            }
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {id:3, message: state.newPostValue}],
                newPostValue: ""
            }
        case SET_USER :
            return {
                ...state,
                user: action.user
            }
        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        default :
            return state
    }
}

export const writingPost = (text) => ({type: WRITING_POST, newText: text})
export const addPost= () => ({type: ADD_POST})
export const setUser= (user) => ({type: SET_USER, user})
export const setIsLoading= (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUser(response))
                profileAPI.getStatus(userId)
                    .then( status => {
                        dispatch(setStatus(status))
                    })
                dispatch(setIsLoading(false))
            })

    }
}

export const sendStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(response => {
                if (!response.resultCode) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export default profileReducer