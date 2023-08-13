import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Favorites from "../screens/Favorites/Favorites";
import NavigationButton from "../components/NavigationButton/NavigationButton";

const Stack = createNativeStackNavigator();

const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} 
                options={{
                    headerRight: () => (
                        <NavigationButton />
                    )
                }}/>
                <Stack.Screen name="Favorites" component={Favorites} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
