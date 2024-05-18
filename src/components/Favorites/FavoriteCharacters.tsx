import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import CharacterList from '../Characters/CharacterList';
import './Favorite.css';

export default function FavoriteCharacters() {
    const { favoriteCharacters } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Characters</h2>
            <CharacterList characters={favoriteCharacters} />
        </>
    );
}
