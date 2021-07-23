import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Blog from "../components/Blog";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route})=>{

    const id = route.params.id;
    const {state} = useContext(Context);

    const currentPost = state.find((post)=>post.id===id);

    return (
        <View>
            <Text>{currentPost.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;