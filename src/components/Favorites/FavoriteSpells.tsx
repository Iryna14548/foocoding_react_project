import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import SpellList from '../Spells/SpellList';

export default function FavoriteSpells() {
    const { favoriteSpells } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Spells</h2>
            <SpellList spells={favoriteSpells} />
        </>
    );
}
