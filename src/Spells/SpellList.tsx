import './SpellList.css';
import { Link } from 'react-router-dom';
import { Spell } from './interfacesSpell';

interface SpellListProps {
    spells: Spell[];
}

export default function SpellList({ spells }: SpellListProps) {
    return (
        <ul className="potion-list__items">
            {spells.map((spell) => {
                // Determine if the current potion is a favorite
                // const isFavorite = favoriteSpells.some((fav) => fav.id === spell.id);

                return (
                    <li className="potion-list__item" key={spell.id}>
                        {/* <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(potion)}
                        /> */}
                        <Link to={`/potions/${spell.name}`} className="potion-list__anchor">
                            <img
                                src={spell.image ?? '../src/images/Spell_Icon.jpg'}
                                alt={spell.name}
                                className="potion-list__image"
                            />
                            <h2 className="potion-list__name">{spell.name}</h2>
                            {/* <p className="character-list__effect">{spell.effect ?? 'Potion'}</p> */}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
