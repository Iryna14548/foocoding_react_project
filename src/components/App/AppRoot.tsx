import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Character } from '../Characters/interfaces';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export default function AppRoot() {
    const charactersJSON = window.localStorage.getItem('favoriteCharacters');
    const favoriteCharactersFromLocalStorage = charactersJSON !== null ? JSON.parse(charactersJSON) : [];

    const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>(
        favoriteCharactersFromLocalStorage
    );

    useEffect(() => {
        window.localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);

    return (
        <>
            <FavoriteContext.Provider value={{ favoriteCharacters, setFavoriteCharacters }}>
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
