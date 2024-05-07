import { Link } from 'react-router-dom';
import '../../Styles/Hero.css';

export default function Home() {
    return (
        <>
            <h2>
                Welcome to the ultimate Harry Potter WIKI! Your magical portal to all things Harry Potter.
                Whether you're looking to get lost in the spellbinding books, relive the captivating movies,
                meet the unforgettable characters, brew up knowledge on mystical potions, or learn to cast
                spells, you've come to the right place. Let the adventure begin!
            </h2>

            <li>
                <Link to={`/books`}>
                    {/* <img src="../src/images/book.png" alt="books" /> */}
                    <h2>Books</h2>
                </Link>
            </li>

            <li>
                <Link to={`/movies`}>
                    <h2>Movies</h2>
                </Link>
            </li>

            <li>
                <Link to={`/characters`}>
                    <h2>Characters</h2>
                </Link>
            </li>
            <li>
                <Link to={`/potions`}>
                    <h2>Potions</h2>
                </Link>
            </li>

            <li>
                <Link to={`/spells`}>
                    <h2>Spells</h2>
                </Link>
            </li>
            <li>
                <Link to={`/favorites`}>
                    <h2>Favorites</h2>
                </Link>
            </li>
        </>
    );
}
