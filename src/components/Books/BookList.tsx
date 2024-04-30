import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

import './PotionList.css';
import { Link } from 'react-router-dom';

interface PotionListProps {
    books: Book[];
}

export default function BookList({ potions }: PotionListProps) {
    const { favoritePotions, setFavoritePotions } = useContext(FavoriteContext);

    const toggleFavorite = (potion: Potion) => {
        if (favoritePotions.some((fav) => fav.id === potion.id)) {
            setFavoritePotions(favoritePotions.filter((fav) => fav.id !== potion.id));
        } else {
            setFavoritePotions([...favoritePotions, potion]);
        }
    };

    return (
        <ul className="potion-list__items">
            {potions.map((potion) => {
                // Determine if the current potion is a favorite
                const isFavorite = favoritePotions.some((fav) => fav.id === potion.id);

                return (
                    <li className="potion-list__item" key={potion.id}>
                        <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(potion)}
                        />
                        <Link to={`/potions/${potion.name}`} className="potion-list__anchor">
                            <img
                                src={potion.image ?? '../src/images/potion.jpg'}
                                alt={potion.name}
                                className="potion-list__image"
                            />
                            <h2 className="potion-list__name">{potion.name}</h2>
                            <p className="potion-list__effect">{potion.effect ?? 'Potion'}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
