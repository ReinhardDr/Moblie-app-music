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

