import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";

import { Text,Button } from "react-native";
import TabScreen from "../screens/BottomTabScreen";


const Stack =createNativeStackNavigator();

function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen"
            screenOptions={{
               }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{
        
          headerRight: () => (
            <Text>Hi</Text>
          ),
        }} />
                    <Stack.Screen name="SecondScreen" component={SecondScreen}/>
                    <Stack.Screen name="TabScreen" component={TabScreen}/>
                    
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;