import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Favorites from "../screens/favorites/Favorites";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import {screenNames} from '../utils/constants'

const Stack = createNativeStackNavigator();

const {home, favorite} = screenNames;
    
const NavigationComponent = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={home}>
                <Stack.Screen name={home} component={Home} 
                options={{
                    headerRight: () => (
                        <NavigationButton />
                    )
                }}/>
                <Stack.Screen name={favorite} component={Favorites} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
