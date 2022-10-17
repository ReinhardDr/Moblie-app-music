import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../audiolist';
import player from '../player';
import playerlist from '../playerlist';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
const NavigatorApp =() => {
    return <Tab.Navigator>
        <Tab.Screen name = 'HomePage' component={AudioList} options ={{
            tabBarIcon: ({color , size,focused}) => {
                return <Entypo name="home" size={24} color="black" />
            }
        }} />
        <Tab.Screen name = 'Player' component={player} options ={{
            tabBarIcon: ({size ,color}) => {
                return <Entypo name="music" size={24} color="black" />
            }
        }} />
        <Tab.Screen name = 'List Music' component={playerlist} options ={{
            tabBarIcon: ({size, color}) =>{
                return <Ionicons name="library-sharp" size={24} color="black" />
            }
        }} />
    </Tab.Navigator>
}
export default NavigatorApp;