import './CharacterList.css';
import { Character } from './interfacesCharacter';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

interface CharacterListProps {
    characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
    const { favoriteCharacters, setFavoriteCharacters } = useContext(FavoriteContext);

    const toggleFavorite = (character: Character) => {
        if (favoriteCharacters.some((fav) => fav.id === character.id)) {
            setFavoriteCharacters(favoriteCharacters.filter((fav) => fav.id !== character.id));
        } else {
            setFavoriteCharacters([...favoriteCharacters, character]);
        }
    };

    return (
        <ul className="character-list__items">
            {characters.map((character) => {
                // Determine if the current character is a favorite
                const isFavorite = favoriteCharacters.some((fav) => fav.id === character.id);

                return (
                    <li className="character-list__item" key={character.id}>
                        <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(character)}
                        />
                        <Link to={`/characters/${character.name}`} className="character-list__anchor">
                            <img
                                src={character.image ?? '/unknown.jpg'}
                                alt={character.name}
                                className="character-list__image"
                            />
                            <h2 className="character-list__name">{character.name}</h2>
                            <p className="character-list__species">{character.species}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
