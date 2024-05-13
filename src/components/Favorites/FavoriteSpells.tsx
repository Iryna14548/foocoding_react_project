import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import SpellList from '../Spells/SpellList';

export default function FavoriteSpells() {
    const { favoriteSpells } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Spells</h2>
            {favoriteSpells.length > 0 ? (
                <SpellList spells={favoriteSpells} />
            ) : (
                <p>You don't have any favorite spells.</p>
            )}
        </>
    );
}
