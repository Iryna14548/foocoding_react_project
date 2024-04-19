import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import CharacterList from '../Characters/CharacterList';
import './Favorite.css';

export default function FavoriteCharacters() {
    const { favoriteCharacters } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Characters</h2>
            {favoriteCharacters.length > 0 ? (
                <CharacterList characters={favoriteCharacters} />
            ) : (
                <p>You don't have any favorite characters.</p>
            )}
        </>
    );
}
