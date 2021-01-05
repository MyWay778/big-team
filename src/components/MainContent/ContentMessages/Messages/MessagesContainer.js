import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textHeader: "Сообщения",
        messagesData: state.dialogsReducer.dialogs[0].messages
    }
}

const MessagesContainer = connect(mapStateToProps, null)(Messages)

export default MessagesContainer
