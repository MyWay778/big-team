const WRITING_MESSAGE = "WRITING-MESSAGE"
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case WRITING_MESSAGE :
            state.newMessage = action.newText
            return state
        case SEND_MESSAGE :
            const newMessage = {
                id: 3, out: true, text: state.newMessage
            }
            state.dialogs[0].messages.push(newMessage)   // What dialogs?!!!
            state.newMessage = ''
            return state
        default :
            return state
    }
}
export const writingMessageCreator = (text) => ({type: WRITING_MESSAGE, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer