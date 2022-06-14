import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './src/colors/color';
import {createStackNavigator} from '@react-navigation/stack';
import HeadingScreen from './src/screens/HeadingScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Bnavigation from './src/components/Bnavigation';
import { AuthProvide } from './src/auth';
const Stack = createStackNavigator();

const App = () => {
 
  return (
     <AuthProvide>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="First" component={HeadingScreen} />
         <Stack.Screen name="Home" component={Bnavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} /> 
      </Stack.Navigator>
</NavigationContainer>
</AuthProvide>
  );
};

export default App;
