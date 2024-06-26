import { useCallback, useEffect, useRef, useState } from 'react';
import CharacterList from '../Characters/CharacterList';
import Pagination from '../Generic/Pagination';
import { fetchCharacters } from '../../api/CharacterAPI';
import { Character, CharacterResponse } from '../Characters/interfacesCharacter';
import Search from '../Generic/Search';
import '../../Styles/Hero.css';

export default function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>(window.history.state?.characters ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');
    const characterListRef = useRef<HTMLDivElement>(null);

    const handleFetchCharacter = useCallback(
        (characterResponse: CharacterResponse) => {
            setCharacters(characterResponse.characters);
            setAmountOfPages(characterResponse.amountOfPages);

            // Scroll to top
            if (characterListRef.current! && currentPage !== 1) {
                characterListRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        },
        [currentPage]
    );

    useEffect(() => {
        fetchCharacters(currentPage, searchInput).then(handleFetchCharacter);
    }, [currentPage, searchInput]);

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
            <div className="hero">
                <h1 className="hero__title">Character List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>

                <p className="hero__preamble">
                    Welcome to the magical directory of everyone who weaves magic in the Harry Potter
                    universe! Getting to know the heroes, villains and mystical creatures that graced our
                    journey. From the pages, to the cinema, to tales untold, each character has added to this
                    extraordinary world's rich tapestry. Go on a trip through the wonders of the magical
                    world, and discover the full spectrum of its inhabitants!
                </p>
                <div ref={characterListRef}>
                    <Search handleSearch={handleCharacterSearch} />
                </div>
                <CharacterList characters={characters} />
            </div>

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
