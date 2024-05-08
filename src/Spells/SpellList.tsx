import './SpellList.css';
import { Link } from 'react-router-dom';
import { Spell } from './interfacesSpell';
import { useContext } from 'react';
import { FavoriteContext } from '../components/context/FavoriteContext/FavoriteContext';

interface SpellListProps {
    spells: Spell[];
}

export default function SpellList({ spells }: SpellListProps) {
    const { favoriteSpells, setFavoriteSpells } = useContext(FavoriteContext);

    const toggleFavorite = (potion: Spell) => {
        if (favoriteSpells.some((fav) => fav.id === potion.id)) {
            setFavoriteSpells(favoriteSpells.filter((fav) => fav.id !== potion.id));
        } else {
            setFavoriteSpells([...favoriteSpells, potion]);
        }
    };

    return (
        <ul className="spell-list__items">
            {spells.map((spell) => {
                //Determine if the current potion is a favorite
                const isFavorite = favoriteSpells.some((fav) => fav.id === spell.id);

                return (
                    <li className="spell-list__item" key={spell.id}>
                        <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(spell)}
                        />
                        <Link to={`/spells/${spell.name.replace(/\//g, ':')}`} className="spell-list__anchor">
                            <img
                                src={spell.image ?? '/Spell_Icon.jpg'}
                                alt={spell.name}
                                className="spell-list__image"
                            />
                            <h2 className="spell-list__name">{spell.name}</h2>
                            <p className="spell-list__category">{spell.category ?? 'Spell'}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
