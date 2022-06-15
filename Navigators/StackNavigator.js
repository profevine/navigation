import React from 'react'
import Home from "./Screens/Home"
import About from "./Screens/About"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
            <Stack.Screen component={Home} name = "Home" />
            <Stack.Screen component={About} name = "About" />
        </Stack.Navigator>
    )
}