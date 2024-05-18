import { useContext, useMemo } from 'react';
import FavoriteBooks from '../Favorites/FavoriteBooks';
import FavoriteCharacters from '../Favorites/FavoriteCharacters';
import FavoriteMovies from '../Favorites/FavoriteMovies';
import FavoritePotions from '../Favorites/FavoritePotions';
import FavoriteSpells from '../Favorites/FavoriteSpells';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export default function FavoritesPage() {
    const { favoriteCharacters, favoritePotions, favoriteSpells, favoriteBooks, favoriteMovies } =
        useContext(FavoriteContext);
    const hasAnyFavorites = useMemo(() => {
        return (
            favoriteCharacters.length > 0 ||
            favoritePotions.length > 0 ||
            favoriteSpells.length > 0 ||
            favoriteBooks.length > 0 ||
            favoriteMovies.length > 0
        );
    }, [favoriteCharacters, favoritePotions, favoriteSpells, favoriteBooks, favoriteMovies]);

    return hasAnyFavorites ? (
        <div>
            {favoriteCharacters.length > 0 && <FavoriteCharacters />}
            {favoritePotions.length > 0 && <FavoritePotions />}
            {favoriteSpells.length > 0 && <FavoriteSpells />}
            {favoriteBooks.length > 0 && <FavoriteBooks />}
            {favoriteMovies.length > 0 && <FavoriteMovies />}
        </div>
    ) : (
        <div>
            <h2 className="favorites-header">You have not added any favorites yet</h2>
            <p className="favorites-header__paragraph">
                You have not added any favorites yet. Go to the books, characters, potions, spells, or movies
                page to add some.
            </p>
        </div>
    );
}
