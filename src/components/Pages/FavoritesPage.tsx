import FavoriteBooks from '../Favorites/FavoriteBooks';
import FavoriteCharacters from '../Favorites/FavoriteCharacters';
import FavoriteMovies from '../Favorites/FavoriteMovies';
import FavoritePotions from '../Favorites/FavoritePotions';
import FavoriteSpells from '../Favorites/FavoriteSpells';

export default function FavoritesPage() {
    return (
        <div>
            <FavoriteCharacters />
            <FavoritePotions />
            <FavoriteSpells />
            <FavoriteBooks />
            <FavoriteMovies />
        </div>
    );
}
