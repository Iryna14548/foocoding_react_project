import { Character } from '../../Characters/interfacesCharacter';
import { Potion } from '../../Potions/interfacesPotion';

export const getFavoriteCharactersFromLocalStorage = (): Character[] => {
    const charactersJSON = window.localStorage.getItem('favoriteCharacters');
    const favoriteCharactersFromLocalStorage = charactersJSON !== null ? JSON.parse(charactersJSON) : [];
    return favoriteCharactersFromLocalStorage;
};

export const getFavoritePotionsFromLocalStorage = (): Potion[] => {
    const potionsJSON = window.localStorage.getItem('favoritePotions');
    const favoritePotionsFromLocalStorage = potionsJSON !== null ? JSON.parse(potionsJSON) : [];
    return favoritePotionsFromLocalStorage;
};
