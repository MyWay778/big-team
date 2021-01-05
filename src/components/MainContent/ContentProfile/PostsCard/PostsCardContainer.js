import React from 'react'
import {addPost, writingPost} from "../../../../redux/profileReducer";
import PostsCard from "./PostsCard";
import {connect} from "react-redux";

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

const PostsCardContainer = connect(mapStateToProps,{writingPost,addPost})(PostsCard)

export default PostsCardContainer
