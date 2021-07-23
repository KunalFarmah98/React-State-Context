import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route})=>{

    const id = route.params.id;
    const {state} = useContext(Context);

    const currentPost = state.find((post)=>post.id===id);

    return (
        <View>
            <Text style = { {padding: 20, borderRadius: 10, borderWidth: 1, borderColor: 'purple', margin: 20, alignSelf: 'center', fontSize: 20, fontWeight: '600', alignContent: 'stretch'}}>{currentPost.title} {"\n\n"}{currentPost.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;