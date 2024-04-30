import FavoriteCharacters from '../Favorites/FavoriteCharacters';
import FavoritePotions from '../Favorites/FavoritePotions';
import FavoriteSpells from '../Favorites/FavoriteSpells';

export default function FavoritesPage() {
    return (
        <div>
            <FavoriteCharacters />
            <FavoritePotions />
            <FavoriteSpells />
        </div>
    );
}
