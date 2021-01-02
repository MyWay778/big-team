import {combineReducers, createStore} from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    postsReducer,
    dialogsReducer,
    friendsReducer,
    usersReducer
});

let store = createStore(reducers)

export default store