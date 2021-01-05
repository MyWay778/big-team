const
FOLLOW = "FOLLOW",
UNFOLLOW = "UNFOLLOW",
SHOW_MORE = "SHOW_MORE",
SET_CURRENT_PAGE= "SET_CURRENT_PAGE",
SET_PAGE_COUNT= "SET_PAGE_COUNT",
SET_IS_LOADING = "SET_IS_LOADING"


let initialState = {
    users: [],
    itemCount: 5,
    pageCount: 3,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
        return {
            ...state,
            users: state.users.map( u => {
                if (action.userId === u.id){
                    u.followed = true
                }
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
                users: action.newUsers
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        case SET_PAGE_COUNT :
            return {
                ...state,
                pageCount: action.newPageCount
            }
        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.isLoading
            }
        default :
            return state
    }
}

export const follow= (userId) => ({type: FOLLOW, userId})
export const unfollow= (userId) => ({type: UNFOLLOW, userId})
export const showMore = (newUsers) => ({type: SHOW_MORE, newUsers})
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage})
export const setPageCount = (newPageCount) => ({type: SET_PAGE_COUNT, newPageCount})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})

export default usersReducer