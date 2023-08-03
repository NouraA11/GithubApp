import React, { useState } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

const NavigationButton = () => {
    const navigation = useNavigation();
    const screenName = useNavigationState((state) => state.routes[state.index].name);
    const [iconName, setIconName] = useState('home');

    const handleClick = () => {
        if (screenName == "Home") {
            navigation.navigate('Favorites');
            setIconName('favorite')
        }
        else {
            navigation.navigate('Home');
            setIconName('home');
        }
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Icon name={iconName} />
        </TouchableOpacity>
    );
}

export default NavigationButton;