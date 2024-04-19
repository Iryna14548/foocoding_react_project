import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Character } from '../Characters/interfaces';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export default function AppRoot() {
    const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

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
