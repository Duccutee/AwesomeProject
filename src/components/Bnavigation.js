import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../colors/color';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import FoodScreen from '../screens/FoodScreen';


const Tab = createBottomTabNavigator();

const Bnavigation = () =>{


    return (
     <Tab.Navigator screenOptions={{
        style:{
            height:55,
            borderTopWidth:0,
            elevation:0,
        },
        showLabel:false,
        activeTinColor:COLORS.primary,
        headerShown:false,
    }}>
        <Tab.Screen name="Homescreen" component={HomeScreen}
        options={{tabBarIcon:({color})=><Icon name="home-filled" color={color} size={28}/>}}/>
        <Tab.Screen name="Food" component={FoodScreen}
        options={{tabBarIcon:({color})=><Icon name="fastfood" color={color} size={28}/>}}/>
        <Tab.Screen name="Search" component={HomeScreen}
        options={{tabBarIcon:({color})=>(
            <View style={{
                height:60,
                width:60,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:COLORS.white,
                borderColor:COLORS.primary,
                borderWidth:3,
                borderRadius:30,
                top:-25,
                elevation:5,
            }}>
        <Icon name="search" color={color} size={28}/>
        </View>
        )}}/>
        <Tab.Screen name="Favorite" component={HomeScreen}
        options={{tabBarIcon:({color})=><Icon name="favorite" color={color} size={28}/>}}/>
        <Tab.Screen name="Setting" component={SettingScreen}
        options={{tabBarIcon:({color})=><Icon name="settings" color={color} size={28}/>}}/>
       
    </Tab.Navigator>)
};
export default Bnavigation;