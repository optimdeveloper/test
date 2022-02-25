/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Login from './components/Login';
import {Provider} from 'mobx-react';
import DataStore from './stores/DataStore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './components/Loading';
import Album from './components/Album';
import Photo from './components/Photo';
import Post from './components/Post';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={DataStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Albumes" component={Album} />
          <Stack.Screen name="Photos" component={Photo} />
          <Stack.Screen name="Posts" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
