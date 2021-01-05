const
    SET_AUTH = "SET_AUTH"

let initialState = {
    user: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH :
            return {
                ...state,
                user: action.user,
                isAuth: (!!action.user.id)
            }
        default :
            return state
    }
}

export const setAuth = (id, login, email) => ({type: SET_AUTH, user: {id, login, email}})

export default authReducer