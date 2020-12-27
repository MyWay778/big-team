const   WRITING_POST = "WRITING-POST"
const ADD_POST = "ADD-POST"

const postsReducer = (state, action) => {
    switch (action.type) {
        case WRITING_POST :
            state.newPostValue = action.newText
            return state
        case ADD_POST :
            const newPost = {
                id: 3,
                message: state.newPostValue
            }
            state.posts.push(newPost)
            state.newPostValue = ""
            return state
        default :
            return state
    }
}

export const writingPostActionCreator = (text) => ({type: WRITING_POST, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default postsReducer