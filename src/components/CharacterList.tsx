import { Character } from '../components/App';

interface CharacterListProps {
    characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <p>{character.species}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
