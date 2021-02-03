import {usersAPI} from "../api/api";

const
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SHOW_MORE = "SHOW_MORE",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_PAGE_COUNT = "SET_PAGE_COUNT",
    SET_IS_LOADING = "SET_IS_LOADING",
    TOGGLE_FOLLOWING_BTN_BLOCK = "TOGGLE_FOLLOWING_BTN_BLOCK"


let initialState = {
    users: [],
    itemCount: 5,
    pageCount: 3,
    currentPage: 1,
    isLoading: false,
    followingBtnBlock: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        u.followed = true
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
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
        case TOGGLE_FOLLOWING_BTN_BLOCK :
            return {
                ...state,
                followingBtnBlock: action.isBlock ?
                    [...state.followingBtnBlock, action.userId] :
                    state.followingBtnBlock.filter(blockId => action.userId !== blockId)
            }

        default :
            return state
    }
}

export const setFollow = (userId) => ({type: FOLLOW, userId})
export const setUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const showMore = (newUsers) => ({type: SHOW_MORE, newUsers})
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage})
export const setPageCount = (newPageCount) => ({type: SET_PAGE_COUNT, newPageCount})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const toggleFollowingBtnBlock = (isBlock, userId) => ({type: TOGGLE_FOLLOWING_BTN_BLOCK, isBlock, userId})

export const requestUsers = (itemCount, currentPage) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        usersAPI.getUsers(itemCount, currentPage)
            .then(response => {
                const pageCount = Math.ceil(response.totalCount / itemCount)
                dispatch(setPageCount(pageCount))
                dispatch(setCurrentPage(currentPage))
                dispatch(showMore(response.items))
                dispatch(setIsLoading(false))
            })
    }
}
export const switchPage = (itemCount, number) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        usersAPI.getUsers(itemCount, number)
            .then(response => {
                dispatch(setCurrentPage(number))
                dispatch(showMore(response.items))
                dispatch(setIsLoading(false))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingBtnBlock(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (!response.resultCode) {
                   dispatch(setFollow(userId))
                }
                dispatch(toggleFollowingBtnBlock(false, userId))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingBtnBlock(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (!response.resultCode) {
                   dispatch(setUnfollow(userId))
                }
                dispatch(toggleFollowingBtnBlock(false, userId))
            })
    }
}



export default usersReducer