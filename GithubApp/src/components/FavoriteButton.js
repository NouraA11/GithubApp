import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, searchFavorite } from "../reducers/Favorite";

const FavoriteButton = ({ repo }) => {
    const dispatch = useDispatch();
    const [iconName, setIconName] = useState('favorite');
    const [isFavorite, setIsFavorite] = useState(false);
    const favoriteList = useSelector((state) => state.Favorite);

    const searchFavorite = () => {
        const repository = favoriteList?.filter((favRepo) => favRepo.id === repo.id);
        if (repository?.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        setIsFavorite(searchFavorite)
        if (isFavorite) {
            setIconName('favorite')
        } else {
            setIconName('favorite-border')
        }
    }, [isFavorite])

    const handleClick = () => {
        if (searchFavorite()) {
            dispatch(removeFavorite(repo))
            setIconName('favorite-border')
        } else {
            dispatch(addFavorite(repo))
            setIconName('favorite')
        }
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Icon name={iconName} size={30} color="black" />
        </TouchableOpacity>
    );
}

export default FavoriteButton;