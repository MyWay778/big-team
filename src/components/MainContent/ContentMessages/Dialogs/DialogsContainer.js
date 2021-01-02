import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     const state = store.getState().dialogsReducer
//                     return <Dialogs textHeader="Диалоги" dialogsData={state.dialogs}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        textHeader: "Диалоги",
        dialogsData: state.dialogsReducer.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
