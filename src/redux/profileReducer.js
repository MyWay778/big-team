import {profileAPI} from "../api/api";

const
    WRITING_POST = "bg-team/profileReducer/WRITING-POST",
    ADD_POST = "bg-team/profileReducer/ADD-POST",
    SET_USER = "bg-team/profileReducer/SET_USER",
    SET_IS_LOADING = "bg-team/profileReducer/SET_IS_LOADING",
    SET_STATUS = "bg-team/profileReducer/SET_STATUS"

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
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.post}],
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

const addPost = (post) => ({type: ADD_POST, post})
const setUser = (user) => ({type: SET_USER, user})
const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))

        const response = await profileAPI.getProfile(userId)
        dispatch(setUser(response))

        const status = await profileAPI.getStatus(userId)
        dispatch(setStatus(status))

        dispatch(setIsLoading(false))
    }
}

export const sendStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.setStatus(status)
        if (!response.resultCode) {
            dispatch(setStatus(status))
        }
    }
}
export const sendPost = (post) => {
    return (dispatch) => {
        dispatch(addPost(post))
    }
}

export default profileReducer