export function followToggleCreator ( userId, apiAction, dispatchAction, btnBlock)  {
    return async (dispatch) => {
        dispatch(btnBlock(true, userId))
        const response = await apiAction(userId)
        if (!response.resultCode) {
            dispatch(dispatchAction(userId))
        }
        dispatch(btnBlock(false, userId))
    }
}