import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Character } from '../Characters/interfacesCharacter';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import { Potion } from '../Potions/interfacesPotion';
import {
    getFavoriteBooksFromLocalStorage,
    getFavoriteCharactersFromLocalStorage,
    getFavoriteMoviesFromLocalStorage,
    getFavoritePotionsFromLocalStorage,
    getFavoriteSpellsFromLocalStorage,
} from '../context/FavoriteContext/FavoriteUtil';
import { Spell } from '../Spells/interfacesSpell';
import { Book } from '../Books/interfacesBook';
import { Movie } from '../Movies/interfacesBook';

export default function AppRoot() {
    const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>(
        getFavoriteCharactersFromLocalStorage()
    );
    const [favoritePotions, setFavoritePotions] = useState<Potion[]>(getFavoritePotionsFromLocalStorage());

    const [favoriteSpells, setFavoriteSpells] = useState<Spell[]>(getFavoriteSpellsFromLocalStorage());

    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>(getFavoriteBooksFromLocalStorage());

    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>(getFavoriteMoviesFromLocalStorage());

    useEffect(() => {
        window.localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);

    useEffect(() => {
        window.localStorage.setItem('favoritePotions', JSON.stringify(favoritePotions));
    }, [favoritePotions]);

    useEffect(() => {
        window.localStorage.setItem('favoriteSpells', JSON.stringify(favoriteSpells));
    }, [favoriteSpells]);

    useEffect(() => {
        window.localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
    }, [favoriteBooks]);

    useEffect(() => {
        window.localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    return (
        <>
            <FavoriteContext.Provider
                value={{
                    favoriteCharacters,
                    setFavoriteCharacters,
                    favoritePotions,
                    setFavoritePotions,
                    favoriteSpells,
                    setFavoriteSpells,
                    favoriteBooks,
                    setFavoriteBooks,
                    favoriteMovies,
                    setFavoriteMovies,
                }}
            >
                <nav>
                    <Navigation />
                </nav>
                <main className="app__content">
                    <Outlet />
                </main>
            </FavoriteContext.Provider>
        </>
    );
}
