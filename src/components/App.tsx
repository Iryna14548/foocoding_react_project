import { useEffect, useState } from 'react';
import '../styles/App.css';
import CharacterList from './CharacterList';
import { fetchCharacters } from '../utils/CharacterUtils';
import Pagination from './Pagination';

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

    useEffect(() => {
        fetchCharacters(currentPage).then((characterResponse) => {
            setCharacters(characterResponse.characters);
            setAmountOfPages(characterResponse.amountOfPages);
            //scroll to top
            window.scrollTo(0, 0);
            console.log('data', characterResponse);
        });
    }, [currentPage]);

    return (
        <>
            <CharacterList characters={characters} />
            <Pagination
                currentPage={currentPage}
                onCurrentPageChange={(page: number) => {
                    setCurrentPage(page);
                }}
                amountOfPages={amountOfPages}
            />
        </>
    );
}

export default App;
