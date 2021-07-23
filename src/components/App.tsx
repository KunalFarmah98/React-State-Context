import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IndexStackScreen } from '../navigation/StackNavigator';
import { Provider } from '../context/BlogContext';


const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <IndexStackScreen />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
