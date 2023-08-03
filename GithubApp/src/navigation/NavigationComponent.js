import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import NavigationButton from "../components/NavigationButton";

const Stack = createNativeStackNavigator();

const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerBackVisible: false,
                    headerRight: () => (
                        <NavigationButton />
                    )
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Favorites" component={Favorites} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
