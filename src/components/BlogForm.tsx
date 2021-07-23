import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const BlogForm = (props) => {

    const { state } = useContext(Context);
    let id = props.id;
    let currentPost=  null;
    if (id)
        currentPost = state.find((post) => post.id === id);

    const [title, setTitle] = useState(id ? currentPost.title : '');
    const [body, setBody] = useState(id ? currentPost.body : '');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(term) => { setTitle(term); }} />
            <Text style={styles.label}>Enter Body:</Text>
            <TextInput style={styles.input} value={body} onChangeText={(term) => { setBody(term); }} />

            <Button title={props.buttonTitle} onPress={()=>{props.onSubmit(title,body)}} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        margin: 10
    },
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 15
    }
});

export default BlogForm;