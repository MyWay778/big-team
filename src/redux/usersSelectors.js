import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
   return state.usersReducer.users
}
// Reselector example
export const getUsers = createSelector(getUsersSelector, (users) => {
   return users.filter( u => true)
})
export const getItemCount = (state) => {
   return state.usersReducer.itemCount
}
export const getPageCount = (state) => {
   return state.usersReducer.pageCount
}
export const getPage = (state) => {
   return state.usersReducer.currentPage
}
export const getIsLoading = (state) => {
   return state.usersReducer.isLoading
}
export const getFollowingBtnBlock = (state) => {
   return state.usersReducer.followingBtnBlock
}
export const getIsAuth = (state) => {
   return state.authReducer.isAuth
}

