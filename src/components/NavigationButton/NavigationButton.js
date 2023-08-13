import React from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

const NavigationButton = () => {
    const navigation = useNavigation();
    const screenName = useNavigationState((state) => state.routes[state.index].name);

    const handleClick = () => {
        if (screenName == "Favorites") {
            navigation.navigate('Home');
        }
        else {
            navigation.navigate('Favorites');
        }
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Icon name={screenName == "Favorites" ? 'home' : 'favorite-border'} size={30} />
        </TouchableOpacity>
    );
}

export default NavigationButton;