import React from 'react';
//import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen1 from './src/StartScreen1';
import StartScreen2 from './src/StartScreen2';
import PermissionsNotification from './src/PermissionsNotification';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Home from './src/Home';





const Stack = createStackNavigator(); 

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartScreen1"
            component={StartScreen1}
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen
            name="StartScreen2"
            component={StartScreen2}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="PermissionsNotification"
            component={PermissionsNotification}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
    </NavigationContainer> 
  );
  }
}

export default App;


  
