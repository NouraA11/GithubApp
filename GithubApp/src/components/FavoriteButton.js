import React, { useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

const FavoriteButton = () => {
    const [iconName, setIconName] = useState('favorite'); //or favorite-border

    const handleClick = () => {
        // if (screenName == "Home") {
        //     navigation.navigate('Favorites');
        //     setIconName('favorite')
        // }
        // else {
        //     navigation.navigate('Home');
        //     setIconName('home');
        // }
    }

    return ( // or toggle icon
        <TouchableOpacity onPress={handleClick}>
            <Icon name={iconName} />
        </TouchableOpacity>
    );
}

export default FavoriteButton;