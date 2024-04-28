import React from 'react';
import { Character } from '../../Characters/interfacesCharacter';
import { Potion } from '../../Potions/interfacesPotion';

interface FavoriteContextValue {
    favoriteCharacters: Character[];
    setFavoriteCharacters: (favorites: Character[]) => void;
    favoritePotions: Potion[];
    setFavoritePotions: (favorites: Potion[]) => void;
}

export const FavoriteContext = React.createContext<FavoriteContextValue>({
    favoriteCharacters: [],
    setFavoriteCharacters: () => {},
    favoritePotions: [],
    setFavoritePotions: () => {},
});
