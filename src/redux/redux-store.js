import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsReducer,
    friendsReducer,
    usersReducer,
    authReducer,
    appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))
window.store = store
export default store