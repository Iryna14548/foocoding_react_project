import './CharacterList.css';
import Search from '../Generic/Search';
import { Character } from './interfaces';
import { Link } from 'react-router-dom';

interface CharacterListProps {
    characters: Character[];
    handleCharacterSearch: (searchInput: string) => void;
}

export default function CharacterList({ characters, handleCharacterSearch }: CharacterListProps) {
    return (
        <div className="character-list">
            <h1 className="character-list__title">Character List</h1>
            <h3 className="character-list__subheading">Discover the wizarding world</h3>

            <p className="character-list__preamble">
                This is a list of characters in the Harry Potter series. They are all characters who have
                appeared in a Harry Potter-related book by J. K. Rowling.
            </p>
            <Search handleCharacterSearch={handleCharacterSearch} />
            <ul className="character-list__items">
                {characters.map((character) => (
                    <li className="character-list__item" key={character.id}>
                        <Link to={`/characters/${character.name}`} className="character-list__anchor">
                            <img
                                src={character.image ?? '../src/images/unknown.jpg'}
                                alt={character.name}
                                className="character-list__image"
                            />

                            <h2 className="character-list__name">{character.name}</h2>
                            <p className="character-list__species">{character.species}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
