import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../audiolist';
import player from '../player';
import playelist from '../playerlist';
import playerlist from '../playerlist';

const Tab = createBottomTabNavigator()
const NavigatorApp =() => {
    return <Tab.Navigator>
        <Tab.Screen name = 'AudioList' component={AudioList} />
        <Tab.Screen name = 'player' component={player} />
        <Tab.Screen name = 'playerlist' component={playerlist}/>
    </Tab.Navigator>
}
export default NavigatorApp;