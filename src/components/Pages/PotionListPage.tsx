import { useEffect, useState } from 'react';
import PotionList from '../Potions/PotionList';
import { fetchPotions } from '../../api/PotionsAPI';
import { Potion, PotionResponse } from '../Potions/interfacesPotion';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';

export default function PotionPage() {
    const [potions, setPotions] = useState<Potion[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFetchPotions = (potionResponse: PotionResponse) => {
        setPotions(potionResponse.potions);
        setAmountOfPages(potionResponse.amountOfPages);
        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchPotions(currentPage, searchInput).then(handleFetchPotions);
    }, [currentPage]);

    const handlePotionSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchPotions(newCurrentPage, searchInput).then(handleFetchPotions);
    };

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
                <Search handleCharacterSearch={handlePotionSearch} />
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
