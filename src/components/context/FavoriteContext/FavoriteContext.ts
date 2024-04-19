import React from 'react';
import { Character } from '../../Characters/interfaces';

interface FavoriteContextValue {
    favoriteCharacters: Character[];
    setFavoriteCharacters: (favorites: Character[]) => void;
}

export const FavoriteContext = React.createContext<FavoriteContextValue>({
    favoriteCharacters: [],
    setFavoriteCharacters: (favorites: Character[]) => {},
});
