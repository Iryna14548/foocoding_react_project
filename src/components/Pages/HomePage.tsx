import { Link } from 'react-router-dom';
import '../../Styles/Hero.css';
import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <div>
                <h1 className="hero__title">Welcome to the Harry Potter WIKI!</h1>

                <p className="hero__preamble">
                    Your magical portal to all things Harry Potter. Whether you're looking to get lost in the
                    spellbinding books, relive the captivating movies, meet the unforgettable characters, brew
                    up knowledge on mystical potions, or learn to cast spells, you've come to the right place.
                </p>

                <h3 className="hero__subheading ">Let the adventure begin!</h3>
            </div>
            <ul className="home-list__items">
                <li className="home-list__item">
                    <Link to={`/books`} className="home-list__anchor">
                        <img src="/rectangle-1.jpg" alt="books" className="home-list__image" />
                        <h2 className="home-list__name">Books</h2>
                    </Link>
                </li>

                <li className="home-list__item">
                    <Link to={`/movies`} className="home-list__anchor">
                        <img src="/PS_poster.webp" alt="movies" className="home-list__image" />
                        <h2 className="home-list__name">Movies</h2>
                    </Link>
                </li>

                <li className="home-list__item">
                    <Link to={`/characters`} className="home-list__anchor">
                        <img src="/charactersHome.png" alt="characters" className="home-list__image " />
                        <h2 className="home-list__name">Characters</h2>
                    </Link>
                </li>
                <li className="home-list__item">
                    <Link to={`/potions`} className="home-list__anchor">
                        <img src="/potion+of+climbing.png" alt="potions" className="home-list__image " />
                        <h2 className="home-list__name">Potions</h2>
                    </Link>
                </li>

                <li className="home-list__item">
                    <Link to={`/spells`} className="home-list__anchor">
                        <img src="/Spell_Icon.jpg" alt="spells" className="home-list__image " />

                        <h2 className="home-list__name">Spells</h2>
                    </Link>
                </li>

                <li className="home-list__item">
                    <Link to={`/favorites`} className="home-list__anchor">
                        <img src="/favorite.webp" alt="spells" className="home-list__image" />
                        <h2 className="home-list__name">Favorites</h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}
