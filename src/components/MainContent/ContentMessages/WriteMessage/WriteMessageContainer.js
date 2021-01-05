import React from 'react'
import WriteMessage from "./WriteMessage";
import {sendMessage, writingMessage} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";

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

const WriteMessageContainer = connect(mapStateToProps, {writingMessage, sendMessage})(WriteMessage)

export default WriteMessageContainer
