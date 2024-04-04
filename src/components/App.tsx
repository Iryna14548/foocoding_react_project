import { useEffect, useState } from 'react';
import '../styles/App.css';
import CharacterList from './CharacterList';
import { CharacterResponse, fetchCharacters } from '../utils/CharacterUtils';
import Pagination from './Pagination';
import Navigation from './Navigation';

export interface Character {
    id: string;
    image: string;
    name: string;
    species: string;
}

function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFetchCharacter = (characterResponse: CharacterResponse) => {
        setCharacters(characterResponse.characters);
        setAmountOfPages(characterResponse.amountOfPages);
        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchCharacters(currentPage, searchInput).then(handleFetchCharacter);
    }, [currentPage]);

    const handleCharacterSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchCharacters(newCurrentPage, searchInput).then(handleFetchCharacter);
    };
    return (
        <>
            <Navigation />

            <div className="app__content">
                <CharacterList characters={characters} handleCharacterSearch={handleCharacterSearch} />
                <Pagination
                    currentPage={currentPage}
                    onCurrentPageChange={(page: number) => {
                        setCurrentPage(page);
                    }}
                    amountOfPages={amountOfPages}
                />
            </div>
        </>
    );
}

export default App;
