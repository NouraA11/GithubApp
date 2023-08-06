import React, { useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

const FavoriteButton = () => {
    const [iconName, setIconName] = useState('favorite-border'); //or favorite

    const handleClick = () => {
        // if (screenName == "Home") {
        //     navigation.navigate('Favorites');
        // }
        // else {
        //     navigation.navigate('Home');
        // }
    }

    return ( // or toggle icon
        <TouchableOpacity onPress={handleClick}>
            <Icon name={iconName} size={30} color="white" />
        </TouchableOpacity>
    );
}

export default FavoriteButton;