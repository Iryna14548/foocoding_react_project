import { useState } from 'react';

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
                type="text"
                className="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-button">
                🔎
            </button>
        </form>
    );
}
