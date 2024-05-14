import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchSpells } from '../../api/SpellsAPI.';
import { Spell, SpellResponse } from '../Spells/interfacesSpell';
import SpellList from '../Spells/SpellList';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';
import '../../Styles/Hero.css';

export default function SpellsPage() {
    const [spells, setSpells] = useState<Spell[]>(window.history.state?.spells ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');
    const spellsListRef = useRef<HTMLDivElement>(null);

    const handleFetchSpells = useCallback(
        (spellResponse: SpellResponse) => {
            setSpells(spellResponse.spells);
            setAmountOfPages(spellResponse.amountOfPages);

            // Scroll to top
            if (spellsListRef.current! && currentPage !== 1) {
                spellsListRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        },
        [currentPage]
    );

    useEffect(() => {
        fetchSpells(currentPage, searchInput).then(handleFetchSpells);
    }, [currentPage, handleFetchSpells, searchInput]);

    const handleSpellSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchSpells(newCurrentPage, searchInput).then(handleFetchSpells);
    };

    useEffect(() => {
        window.history.replaceState(
            {
                ...window.history.state,
                spells,
                currentPage,
                amountOfPages,
                searchInput,
            },
            ''
        );
    }, [spells, currentPage, amountOfPages, searchInput]);

    return (
        <>
            <div>
                <h1 className="hero__title">Spell List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>
                <p className="hero__preamble">
                    Step into Harry Potter's world of magic! Discover the secrets behind the incantations that
                    bewitch minds, weave protection, and battle the forces of darkness. explore the spells
                    that define the bravery, wisdom, and mischief of witches and wizards Join the adventure
                    and learn the magic!
                </p>

                <div ref={spellsListRef}>
                    <Search handleSearch={handleSpellSearch} />
                </div>
                <SpellList spells={spells} />
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
