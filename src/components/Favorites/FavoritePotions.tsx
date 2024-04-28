import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import PotionList from '../Potions/PotionList';

export default function FavoritePotions() {
    const { favoritePotions } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Potions</h2>
            {favoritePotions.length > 0 ? (
                <PotionList potions={favoritePotions} />
            ) : (
                <p>You don't have any favorite potions.</p>
            )}
        </>
    );
}
