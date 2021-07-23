import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({route,navigation})=>{
    
    const {editBlogPost} = useContext(Context);
    const id = route.params.id;
    console.log(id);
    const submitForm = (title, body) =>{
        editBlogPost(id,title,body);
        navigation.navigate('Index');
    }
    return (
        <BlogForm onSubmit = {submitForm} buttonTitle = 'Edit Post' id = {id}/>
    );

}

const styles = StyleSheet.create({
    label:{
        fontSize: 20,
        margin:10
    },
    input:{
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom:15
    }
});

export default EditScreen;