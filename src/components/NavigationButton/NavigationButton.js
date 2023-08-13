import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

const NavigationButton = () => {
    const navigation = useNavigation();

    const handleClick = () => {
            navigation.navigate('Favorites');
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Icon name={'favorite-border'} size={30} />
        </TouchableOpacity>
    );
}

export default NavigationButton;