import { Spell } from '../../../Spells/interfacesSpell';
import { Book } from '../../Books/interfacesBook';
import { Character } from '../../Characters/interfacesCharacter';
import { Movie } from '../../Movies/interfacesBook';
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

export const getFavoriteSpellsFromLocalStorage = (): Spell[] => {
    const spellsJSON = window.localStorage.getItem('favoriteSpells');
    const favoriteSpellsFromLocalStorage = spellsJSON !== null ? JSON.parse(spellsJSON) : [];
    return favoriteSpellsFromLocalStorage;
};

export const getFavoriteBooksFromLocalStorage = (): Book[] => {
    const booksJSON = window.localStorage.getItem('favoriteBooks');
    const favoriteBooksFromLocalStorage = booksJSON !== null ? JSON.parse(booksJSON) : [];
    return favoriteBooksFromLocalStorage;
};

export const getFavoriteMoviesFromLocalStorage = (): Movie[] => {
    const moviesJSON = window.localStorage.getItem('favoriteMovies');
    const favoriteMoviesFromLocalStorage = moviesJSON !== null ? JSON.parse(moviesJSON) : [];
    return favoriteMoviesFromLocalStorage;
};
