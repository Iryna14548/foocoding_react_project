import { useState } from 'react';
import '../styles/Search.css';

interface SearchProps {
    handleCharacterSearch: (searchInput: string) => void;
}

export default function Search({ handleCharacterSearch }: SearchProps) {
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCharacterSearch(searchInput);
    };

    return (
        <form onSubmit={handleFormSubmit} className="search-form">
            <input
                className="search-input"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for a character"
            />
            {/* <button type="submit" className="search-button">
                🔎
            </button> */}
        </form>
    );
}
