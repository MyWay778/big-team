import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textHeader: "Диалоги",
        dialogsData: state.dialogsReducer.dialogs,
        isAuth: state.authReducer.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps,null)(Dialogs)

export default DialogsContainer
