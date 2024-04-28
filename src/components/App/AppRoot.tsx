import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Character } from '../Characters/interfacesCharacter';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import { Potion } from '../Potions/interfacesPotion';
import {
    getFavoriteCharactersFromLocalStorage,
    getFavoritePotionsFromLocalStorage,
} from '../context/FavoriteContext/FavoriteUtil';

export default function AppRoot() {
    const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>(
        getFavoriteCharactersFromLocalStorage()
    );
    const [favoritePotions, setFavoritePotions] = useState<Potion[]>(getFavoritePotionsFromLocalStorage());

    useEffect(() => {
        window.localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);

    useEffect(() => {
        window.localStorage.setItem('favoritePotions', JSON.stringify(favoritePotions));
    }, [favoritePotions]);

    return (
        <>
            <FavoriteContext.Provider
                value={{ favoriteCharacters, setFavoriteCharacters, favoritePotions, setFavoritePotions }}
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
