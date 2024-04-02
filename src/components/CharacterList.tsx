import { Character } from '../components/App';
import '../styles/CharacterList.css';

interface CharacterListProps {
    characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
    return (
        <div className="character-list">
            <h2 className="character-list__title">Character List</h2>
            <h3 className="character-list__subheading">Discover the wizarding world</h3>

            <p className="character-list__preamble">
                This is a list of characters in the Harry Potter series. They are all characters who have
                appeared in a Harry Potter-related book by J. K. Rowling.
            </p>
            <ul className="character-list__items">
                {characters.map((character) => (
                    <li className="character-list__item" key={character.id}>
                        <img
                            src={character.image ?? '../src/images/unknown.jpg'}
                            alt={character.name}
                            className="character-list__image"
                        />

                        <h2 className="character-list__name">{character.name}</h2>
                        <p className="character-list__species">{character.species}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
