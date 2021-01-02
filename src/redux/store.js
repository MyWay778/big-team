import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        dialogsData: {
            dialogs: [
                {
                    id: 1, name: "Петр", messages: [
                        {id: 1, out: false, text: 'Привет, как дела?'}, {id: 2, out: true, text: 'Отлично как у тебя?'}]
                },
                {
                    id: 2, name: "Вася", messages: [
                        {id: 1, out: false, text: 'Привет, как дела?'}, {id: 2, out: true, text: 'Отлично как у тебя?'}]
                }
            ],
            newMessage: ""
        },
        postsData: {
            posts: [
                {id: 1, message: 'Всем привет!) Как у вас дела???'},
                {id: 2, message: 'У меня все ОК!'}
            ],
            newPostValue: ''
        },
        friendsData: [
            {id: 1, name: 'Петр'},
            {id: 2, name: 'Вася'}
        ]
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.postsData = postsReducer(this._state.postsData, action)
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._callSubscriber(this)
    }
}


// store.actions.postActions.handlePostChange = store.actions.postActions.handlePostChange.bind(store)
export default store