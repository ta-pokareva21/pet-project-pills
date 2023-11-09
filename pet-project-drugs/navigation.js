import React from "react";
import App from "./App"; 
import "./src/StartScreen2";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return ( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name:"App"
                component:{App}
                />
        </Stack.Navigator>
    </NavigationContainer>
)
}