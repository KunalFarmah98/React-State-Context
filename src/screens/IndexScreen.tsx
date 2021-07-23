import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import Blog from '../components/Blog';

const IndexScreen = () => {
    const { state, deleteBlogPost } = useContext(BlogContext);
    return (
        <View>
            <FlatList
                keyExtractor={blogPost => blogPost.id}
                data={state}
                renderItem={({ item }) => {
                    return <Blog data={item} del = {()=>deleteBlogPost(item.id)} />
                    }
                }/>
        </View>
    );
}

export default IndexScreen;