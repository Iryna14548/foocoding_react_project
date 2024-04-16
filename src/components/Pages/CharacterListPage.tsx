import React, { useEffect, useState } from 'react';
import CharacterList from '../Characters/CharacterList';
import Pagination from '../Generic/Pagination';
import { fetchCharacters } from '../../api/CharacterAPI';
import { Character, CharacterResponse } from '../Characters/interfaces';

export default function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>(window.history.state?.characters ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');

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

    useEffect(() => {
        window.history.replaceState(
            {
                ...window.history.state,
                characters,
                currentPage,
                amountOfPages,
                searchInput,
            },
            ''
        );
    }, [characters, currentPage, amountOfPages, searchInput]);

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
