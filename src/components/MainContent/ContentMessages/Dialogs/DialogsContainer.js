import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textHeader: "Диалоги",
        dialogsData: state.dialogsReducer.dialogs
    }
}

const DialogsContainer = connect(mapStateToProps,null)(Dialogs)

export default DialogsContainer
