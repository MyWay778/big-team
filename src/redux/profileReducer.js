const
WRITING_POST = "WRITING-POST",
ADD_POST = "ADD-POST",
SET_USER = "SET_USER",
SET_IS_LOADING = "SET_IS_LOADING",
SHOW_AUTH_PAGE = "SHOW_AUTH_PAGE"

let initialState = {
    user: undefined,
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
        case SHOW_AUTH_PAGE :
            return {
                ...state,
                showAuthPage: action.isShow
            }
        default :
            return state
    }
}

export const writingPost = (text) => ({type: WRITING_POST, newText: text})
export const addPost= () => ({type: ADD_POST})
export const setUser= (user) => ({type: SET_USER, user})
export const setIsLoading= (isLoading) => {
    return {type: SET_IS_LOADING, isLoading}}
export const showAuthPage = (isShow) => ({type: SHOW_AUTH_PAGE, isShow})

export default profileReducer