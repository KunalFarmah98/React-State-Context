import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const Blog = ({data, del}) => {

    const navigation = useNavigation();
    return(
        <View style = {styles.row}>
            <Text style = {styles.title} onPress = {()=>{navigation.navigate('Show', {id: data.id, name: data.title})}}>{data.title}{"\n\n"}{data.body}</Text>
            <TouchableOpacity onPress = {del}>
            <Icon name = 'trash' size = {25} style = {styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        margin: 15,
        alignItems: 'center'
    },
    title:{
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal:10
    },
    body:{
        fontSize: 18,
        fontWeight: '500',
        marginTop: 20,
        marginHorizontal:10,
        position: 'absolute',
        alignSelf: 'flex-end',
        alignContent: 'flex-end'
    },
    icon:{
        marginEnd: 20
    }
})

export default Blog;