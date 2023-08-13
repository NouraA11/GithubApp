import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../reducers/Favorite";
import { useNavigationState } from "@react-navigation/native";

const FavoriteButton = ({ repo }) => {
    const dispatch = useDispatch();
    const [iconName, setIconName] = useState('favorite-border');
    const [isFavorite, setIsFavorite] = useState(false);
    const favoriteList = useSelector((state) => state.Favorite);
    const screenName = useNavigationState((state) => state.routes[state.index].name);


    const searchFavorite = () => {
        const repository = favoriteList?.filter((favRepo) => favRepo.id === repo.id);
         return repository?.length != 0 ;
    }

    useEffect(() => {
        setIsFavorite(searchFavorite())
        if (isFavorite || screenName === 'Favorites') {
            setIconName('favorite')
        } else {
            setIconName('favorite-border')
        }
    }, [])

    const handleClick = () => {
        if (searchFavorite()) {
            setIconName('favorite-border')
            dispatch(removeFavorite(repo))
        } else {
            setIconName('favorite')
            dispatch(addFavorite(repo))
        }
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Icon name={iconName} size={30} color="#000000" />
        </TouchableOpacity>
    );
}

export default FavoriteButton;