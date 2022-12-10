<<<<<<< HEAD
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';
import color from './app/misc/color';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './app/screens/login';
const stack = createNativeStackNavigator();

const App =() => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='login' 
      screenOptions={{headerShown: false}}
      >
        <stack.Screen name="login" component={login} />
      </stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;

>>>>>>> 2d4f0b8d8ea2703d17a2c60a63091908e5338597
