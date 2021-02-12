const WRITING_MESSAGE = "bg-team/dialogsReducer/WRITING-MESSAGE"
const SEND_MESSAGE = "bg-team/dialogsReducer/SEND-MESSAGE"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITING_MESSAGE :
            return {
                ...state,
                newMessage: action.newText
            }
        case SEND_MESSAGE : {
            const newMessage = {
                id: 3, out: true, text: state.newMessage
            }
            const stateCopy = {
                ...state,
                dialogs: [...state.dialogs]
            }
            stateCopy.dialogs[0].messages = [...state.dialogs[0].messages]
            stateCopy.dialogs[0].messages.push(newMessage)   // What dialogs?!!!
            stateCopy.newMessage = ''
            return stateCopy
        }
        default :
            return state
    }
}
export const writingMessage = (text) => ({type: WRITING_MESSAGE, newText: text})
export const sendMessage = () => ({type: SEND_MESSAGE})

export default dialogsReducer