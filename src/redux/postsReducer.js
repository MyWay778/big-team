const   WRITING_POST = "WRITING-POST"
const ADD_POST = "ADD-POST"

let initialState = {
    posts: [
        {id: 1, message: 'Всем привет!) Как у вас дела???'},
        {id: 2, message: 'У меня все ОК!'}
    ],
    newPostValue: ''
}

const postsReducer = (state = initialState, action) => {
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
        default :
            return state
    }
}

export const writingPostActionCreator = (text) => ({type: WRITING_POST, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default postsReducer