import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textHeader: "Сообщения",
        messagesData: state.dialogsReducer.dialogs[0].messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
