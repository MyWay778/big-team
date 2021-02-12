import {usersAPI} from "../api/api";
import {followToggleCreator} from "../halpers/followToggleCreator";

const
    FOLLOW = "bg-team/usersReducer/FOLLOW",
    UNFOLLOW = "bg-team/usersReducer/UNFOLLOW",
    SHOW_MORE = "bg-team/usersReducer/SHOW_MORE",
    SET_CURRENT_PAGE = "bg-team/usersReducer/SET_CURRENT_PAGE",
    SET_PAGE_COUNT = "bg-team/usersReducer/SET_PAGE_COUNT",
    SET_IS_LOADING = "bg-team/usersReducer/SET_IS_LOADING",
    TOGGLE_FOLLOWING_BTN_BLOCK = "bg-team/usersReducer/TOGGLE_FOLLOWING_BTN_BLOCK"


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

const setFollow = (userId) => ({type: FOLLOW, userId})
const setUnfollow = (userId) => ({type: UNFOLLOW, userId})
const showMore = (newUsers) => ({type: SHOW_MORE, newUsers})
const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage})
const setPageCount = (newPageCount) => ({type: SET_PAGE_COUNT, newPageCount})
const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
const toggleFollowingBtnBlock = (isBlock, userId) => ({type: TOGGLE_FOLLOWING_BTN_BLOCK, isBlock, userId})

export const requestUsers = (itemCount, currentPage) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))

        const response = await usersAPI.getUsers(itemCount, currentPage)

        const pageCount = Math.ceil(response.totalCount / itemCount)

        dispatch(setPageCount(pageCount))
        dispatch(setCurrentPage(currentPage))
        dispatch(showMore(response.items))

        dispatch(setIsLoading(false))
    }
}

export const follow = (userId) => {
    return  followToggleCreator(userId, usersAPI.follow, setFollow, toggleFollowingBtnBlock)
}

export const unfollow = (userId) => {
   return followToggleCreator(userId, usersAPI.unfollow, setUnfollow, toggleFollowingBtnBlock)
}

export default usersReducer