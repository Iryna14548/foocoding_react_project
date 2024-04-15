import React, { useEffect, useState } from 'react';
import CharacterList from '../Characters/CharacterList';
import Pagination from '../Generic/Pagination';
import { fetchCharacters } from '../../api/CharacterAPI';
import { Character, CharacterResponse } from '../Characters/interfaces';

export default function CharactersPage() {
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
            <CharacterList characters={characters} handleCharacterSearch={handleCharacterSearch} />
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
