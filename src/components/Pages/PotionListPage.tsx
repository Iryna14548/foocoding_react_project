import { useCallback, useEffect, useRef, useState } from 'react';
import PotionList from '../Potions/PotionList';
import { fetchPotions } from '../../api/PotionsAPI';
import { Potion, PotionResponse } from '../Potions/interfacesPotion';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';
import '../../Styles/Hero.css';

export default function PotionPage() {
    const [potions, setPotions] = useState<Potion[]>(window.history.state?.potions ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');
    const potionsListRef = useRef<HTMLDivElement>(null);

    const handleFetchPotions = useCallback(
        (potionResponse: PotionResponse) => {
            setPotions(potionResponse.potions);
            setAmountOfPages(potionResponse.amountOfPages);

            // Scroll to top
            if (potionsListRef.current! && currentPage !== 1) {
                potionsListRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        },
        [currentPage]
    );

    useEffect(() => {
        fetchPotions(currentPage, searchInput).then(handleFetchPotions);
    }, [currentPage, searchInput]);

    const handlePotionSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchPotions(newCurrentPage, searchInput).then(handleFetchPotions);
    };

    useEffect(() => {
        window.history.replaceState(
            {
                ...window.history.state,
                potions,
                currentPage,
                amountOfPages,
                searchInput,
            },
            ''
        );
    }, [potions, currentPage, amountOfPages, searchInput]);

    return (
        <>
            <div>
                <h1 className="hero__title">Potion List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>

                <p className="hero__preamble">
                    Dive into the magical world of Harry Potter with this fun guide to every potion! Discover
                    the amazing powers of these special drinks that have sparked so much excitement and
                    mystery. Learn about the different potions and what they do in the wizarding world!
                </p>
                <div ref={potionsListRef}>
                    <Search handleSearch={handlePotionSearch} />
                </div>
                <PotionList potions={potions} />
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
