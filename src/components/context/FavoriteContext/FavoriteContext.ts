import React from 'react';
import { Character } from '../../Characters/interfacesCharacter';
import { Potion } from '../../Potions/interfacesPotion';
import { Spell } from '../../../Spells/interfacesSpell';

interface FavoriteContextValue {
    favoriteCharacters: Character[];
    setFavoriteCharacters: (favorites: Character[]) => void;
    favoritePotions: Potion[];
    setFavoritePotions: (favorites: Potion[]) => void;
    favoriteSpells: Spell[];
    setFavoriteSpells: (favorites: Spell[]) => void;
}

export const FavoriteContext = React.createContext<FavoriteContextValue>({
    favoriteCharacters: [],
    setFavoriteCharacters: () => {},
    favoritePotions: [],
    setFavoritePotions: () => {},
    favoriteSpells: [],
    setFavoriteSpells: () => {},
});
