import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation})=>{
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const {addBlogPost} = useContext(Context);
    return (
        <View>
            <Text style=  {styles.label}>Enter Title:</Text>
            <TextInput style = {styles.input} value = {title} onChangeText = {(term)=>{setTitle(term);}}/>
            <Text style=  {styles.label}>Enter Body:</Text>
            <TextInput style = {styles.input} value = {body} onChangeText = {(term)=>{setBody(term);}}/>

            <Button title= "Add Post" onPress = {()=>{addBlogPost(title,body); navigation.goBack();}}/>
        </View>
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

export default CreateScreen;