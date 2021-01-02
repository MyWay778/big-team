import React from 'react'
import WriteMessage from "./WriteMessage";
import {sendMessageCreator, writingMessageCreator} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";


// const WriteMessageContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     const state = store.getState().dialogsReducer
//
//                     const propertiesForm = {
//                         submitText: "Отправить",
//                         placeholder: "Написать",
//                         newValue: state.newMessage,
//                         handleChange: (evt) => {
//                             const action = writingMessageCreator(evt.target.value)
//                             store.dispatch(action)
//                         },
//                         handleSubmit: (evt) => {
//                             evt.preventDefault()
//                             const action = sendMessageCreator()
//                             store.dispatch(action)
//                         },
//                     }
//                     return <WriteMessage textHeader="Написать сообщение" propertiesForm={propertiesForm}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }
const mapStateToProps = (state) => {
    return {
        textHeader: 'Написать сообщение',
        propertiesForm: {
            submitText: "Отправить",
            placeholder: "Написать",
            newValue: state.dialogsReducer.newMessage,
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlers: {
            handleSubmit(evt) {
                evt.preventDefault()
                const action = sendMessageCreator()
                dispatch(action)
            },
            handleChange(evt) {
                const action = writingMessageCreator(evt.target.value)
                dispatch(action)
            }
        }
    }
}


const WriteMessageContainer = connect(mapStateToProps, mapDispatchToProps)(WriteMessage)

export default WriteMessageContainer
