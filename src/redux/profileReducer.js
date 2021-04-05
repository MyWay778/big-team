import {authAPI, profileAPI} from "../api/api";
import {auth} from "./authReducer";

const
    WRITING_POST = "bg-team/profileReducer/WRITING-POST",
    ADD_POST = "bg-team/profileReducer/ADD-POST",
    SET_USER = "bg-team/profileReducer/SET_USER",
    SET_IS_LOADING = "bg-team/profileReducer/SET_IS_LOADING",
    SET_STATUS = "bg-team/profileReducer/SET_STATUS",
    SET_PHOTOS = "bg-team/profileReducer/SET_PHOTOS",
    SET_IS_EDIT_PROFILE_MODE = "bg-team/profileReducer/SET_IS_EDIT_PROFILE_MODE"

let initialState = {
    user: undefined,
    status: null,
    posts: [
        {id: 1, message: 'Всем привет!) Как у вас дела???'},
        {id: 2, message: 'У меня все ОК!'}
    ],
    newPostValue: '',
    isLoading: false,
    showAuthPage: false,
    isEditProfileMode: false       //show edit profile card
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
        case SET_PHOTOS :
            return {
                ...state,
                user: {...state.user, photos: action.photos}
            }
        case SET_IS_EDIT_PROFILE_MODE :
            return {
                ...state,
                isEditProfileMode: !state.isEditProfileMode
            }
        default :
            return state
    }
}

const addPost = (post) => ({type: ADD_POST, post})
const setUser = (user) => ({type: SET_USER, user})
const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
const setStatus = (status) => ({type: SET_STATUS, status})
const setPhoto = (photos) => ({type: SET_PHOTOS, photos})
const setIsEditProfileMode = () => ({type: SET_IS_EDIT_PROFILE_MODE})

export const getUserData = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUser(response))
    }
}
export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))

        dispatch(getUserData(userId))

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
export const changePhoto = (photo) =>{
    return async (dispatch) => {
        const response = await profileAPI.sendPhoto(photo)
        if (!response.resultCode) {
            dispatch(setPhoto(response.data.photos))
        }
    }
}

export const switchEditProfileMode = () => {
    return (dispatch) => {
        dispatch(setIsEditProfileMode())
    }
}
export const saveChanges = (values, userId) => {
    return async (dispatch) => {
        const result = await profileAPI.sendChanges(values)
        if (!result.resultCode) {
            dispatch(setIsEditProfileMode())
            dispatch(getUserData(userId))
            return null
        }else {
           return result.messages
        }
    }

}
export default profileReducer