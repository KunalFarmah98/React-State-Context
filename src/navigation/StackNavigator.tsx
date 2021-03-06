import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { TouchableOpacity } from 'react-native';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';

const IndexStack = createStackNavigator();

const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const getTitle = (route, screen) => {
    if (route == undefined)
        return screen;
    const name = route.params.name;
    if (name != null && name != undefined)
        return name;
    else return screen;
}
const IndexStackScreen = () => {
    return (
        <IndexStack.Navigator initialRouteName='Index'>
            <IndexStack.Screen
                name="Index"
                component={IndexScreen}
                options={({ route, navigation }) => ({
                    headerTitle: 'Blogs',
                    headerShown: true,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                            <Ionicons name="add" size={30} style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    )
                })}
            />
            <IndexStack.Screen
                name="Show"
                component={ShowScreen}
                options={({ route , navigation}) => ({
                    headerTitle: getTitle(route, "Show"),
                    headerShown: true,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id, name: route.params.name})}>
                            <Ionicons name="create" size={30} style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    )
                })} />
            <IndexStack.Screen
                name="Create"
                component={CreateScreen}
                options={({ route }) => ({
                    headerTitle: "Create A post",
                    headerShown: true
                })} />
            <IndexStack.Screen
                name="Edit"
                component={EditScreen}
                options={({ route }) => ({
                    headerTitle: `Editting ${getTitle(route, "Blog")}`,
                    headerShown: true
                })} />
        </IndexStack.Navigator>
    );
}


export { IndexStackScreen };

