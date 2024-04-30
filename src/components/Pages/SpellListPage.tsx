import { useEffect, useState } from 'react';
import { fetchSpells } from '../../api/SpellsAPI.';
import { Spell, SpellResponse } from '../../Spells/interfacesSpell';
import SpellList from '../../Spells/SpellList';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';

export default function SpellsPage() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFetchSpells = (spellResponse: SpellResponse) => {
        setSpells(spellResponse.spells);
        setAmountOfPages(spellResponse.amountOfPages);

        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchSpells(currentPage, searchInput).then(handleFetchSpells);
    }, [currentPage]);

    const handleSpellSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchSpells(newCurrentPage, searchInput).then(handleFetchSpells);
    };

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
                <Search handleSearch={handleSpellSearch} />
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
