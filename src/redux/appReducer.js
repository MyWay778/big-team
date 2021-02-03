import {auth} from "./authReducer";

const SUCCESSFUL_INITIALIZATION = "bg-team/appReducer/SUCCESSFUL_INITIALIZATION"

let initialState = {
    successfulInitialization: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSFUL_INITIALIZATION :
            return {
                ...state,
                successfulInitialization: true
            }
            break
        default :
            return state
    }
}

const setSuccessfulInitialization = () => ({type:SUCCESSFUL_INITIALIZATION})

export const initialize = () => {
    return (dispatch) => {
       let result =  dispatch(auth())
       Promise.all([result]).then(()=>{dispatch(setSuccessfulInitialization())})
    }
}

export default appReducer