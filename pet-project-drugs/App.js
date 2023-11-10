import React from 'react';
//import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen1 from './src/StartScreen1';
import StartScreen2 from './src/StartScreen2';




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
        </Stack.Navigator>
    </NavigationContainer> 
  );
  }
}

export default App;


  
