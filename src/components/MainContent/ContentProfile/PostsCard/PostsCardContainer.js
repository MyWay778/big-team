import React from 'react'
import {addPostActionCreator, writingPostActionCreator} from "../../../../redux/postsReducer";
import PostsCard from "./PostsCard";
import {connect} from "react-redux";

// const PostsCardContainer = () => {
//   return (
//       <StoreContext.Consumer>
//           {
//               store => {
//                   const state = store.getState().postsReducer
//
//                   const propertiesForm = {
//                       submitText: "Поделиться",
//                       placeholder: "Что нового?",
//                       newValue: state.newPostValue,
//                       handleChange: (evt) => {
//                           const action = writingPostActionCreator(evt.target.value)
//                           store.dispatch(action)
//                       },
//                       handleSubmit: (evt) => {
//                           evt.preventDefault()
//                           const action = addPostActionCreator()
//                           store.dispatch(action)
//                       },
//                   }
//                   return  <PostsCard textHeader={"Мои новости"} state={state.posts} propertiesForm={propertiesForm}/>
//               }
//           }
//
//       </StoreContext.Consumer>
//    )
// }
const mapStateToProps = (state) => {
    return {
        textHeader: "Мои новости",
        state: state.postsReducer.posts,
        propertiesForm: {
            submitText: "Поделиться",
            placeholder: "Что нового?",
            newValue: state.postsReducer.newPostValue
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlers: {
            handleChange(evt) {
                const action = writingPostActionCreator(evt.target.value)
                dispatch(action)
            },
            handleSubmit(evt) {
                evt.preventDefault()
                const action = addPostActionCreator()
                dispatch(action)
            }
        }
    }
}

const PostsCardContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCard)

export default PostsCardContainer
