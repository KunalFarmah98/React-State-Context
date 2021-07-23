import React from "react";
import { useContext } from "react";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation})=>{
    const {addBlogPost} = useContext(Context);
    const submitForm = (title, body) =>{
        addBlogPost(title,body);
        navigation.navigate('Index');
    }
    return (
        <BlogForm onSubmit = {submitForm} buttonTitle = 'Add Post'/>
    );

}

export default CreateScreen;