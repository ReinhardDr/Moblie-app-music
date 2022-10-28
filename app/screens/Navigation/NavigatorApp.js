import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Player from '../Player';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Libary from '../Libary';
import HomePage from '../HomePage';


const Tab = createBottomTabNavigator()
const NavigatorApp =() => {
    return <Tab.Navigator>
        <Tab.Screen name = 'HomePage' component={HomePage} options ={{
            tabBarIcon: ({color , size,focused}) => {
                return <Entypo name="home" size={24} color="black" />
            }
        }} />
        <Tab.Screen name = 'Player' component={Player} options ={{
            tabBarIcon: ({size ,color}) => {
                return <Entypo name="music" size={24} color="black" />
            }
        }} />
        <Tab.Screen name = 'Libary' component={Libary} options ={{
            tabBarIcon: ({size, color}) =>{
                return <Ionicons name="library-sharp" size={24} color="black" />
            }
        }} />
    </Tab.Navigator>
}
export default NavigatorApp;