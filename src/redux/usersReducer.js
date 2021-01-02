const   FOLLOW = "FOLLOW",
UNFOLLOW = "UNFOLLOW",
SHOW_MORE = "SHOW-MORE"

let initialState = {
    users: [
        {id: 1, followed: true, userPhoto: 'default', fullName: 'Ivan S.', status:'Learning React...', country: 'Russia', city: 'Moscow'},
        {id: 2, followed: false, userPhoto: 'default', fullName: 'Mick J.', status:'Happy father!', country: 'Russia', city: 'Chita'},
        {id: 3, followed: false, userPhoto: 'default', fullName: 'Petr Z.', status:'Trololo!', country: 'Russia', city: 'Xz'},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
        return {
            ...state,
            users: state.users.map( u => {
                if (action.userId === u.id) u.followed = true
                return u
            })
        }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (action.userId === u.id) u.followed = false
                    return u
                })
            }
        case SHOW_MORE :
            return {
                ...state,
                users: [...state.users, ...action.newUsers]
            }
        default :
            return state
    }
}

export const followAC= (userId) => ({type: FOLLOW, userId})
export const unfollowAC= (userId) => ({type: UNFOLLOW, userId})
export const showMoreAC = (newUsers) => ({type: SHOW_MORE, newUsers})

export default usersReducer