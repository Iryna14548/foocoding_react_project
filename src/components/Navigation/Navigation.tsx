import './Navigation.css';
import '../../Styles/Fonts.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState, useMemo } from 'react';
import Hamburger from './Hamburger';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import { CartContext } from '../context/CartContext/CartContext';

export default function Navigation() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { favoriteCharacters, favoritePotions, favoriteSpells, favoriteBooks, favoriteMovies } =
        useContext(FavoriteContext);

    const { cartBooks } = useContext(CartContext);

    const closeNav = () => {
        setIsNavExpanded(false);
    };

    // Memoize the countFavorites value
    const countFavorites = useMemo(() => {
        return (
            favoriteCharacters.length +
            favoritePotions.length +
            favoriteSpells.length +
            favoriteBooks.length +
            favoriteMovies.length
        );
    }, [favoriteCharacters, favoritePotions, favoriteSpells, favoriteBooks, favoriteMovies]);

    // Memoize the countCart value
    const countCarts = useMemo(() => {
        return cartBooks.length;
    }, [cartBooks]);

    return (
        <nav className="navigation">
            <div className="navigation__header">
                <div className="navigation-logo--wrapper">
                    {/* Harry Potter Logo */}
                    <Link to={`/home`}>
                        <img src={'/Harry_Potter.png'} alt="Harry Potter" className="navigation__logo" />
                    </Link>

                    <h2 className="navigation__title">Harry Potter WIKI</h2>
                </div>
                <Hamburger isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
            </div>
            <ul className={`navigation__list ${isNavExpanded ? 'expanded' : ''}`}>
                <li className="navigation__item">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/books"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Books
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/movies"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Movies
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/characters"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Characters
                    </NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink
                        to="/potions"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Potions
                    </NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink
                        to="/spells"
                        className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`}
                        onClick={closeNav}
                    >
                        Spells
                    </NavLink>
                </li>
                <li className="navigation__item navigation-item-icon">
                    <NavLink to="/favorites" className="navigation__link" onClick={closeNav}>
                        <span className="navigation-heart__icon"> ♥ </span>
                        {countFavorites > 0 && (
                            <span className="navigation-heart__count">{countFavorites}</span>
                        )}
                    </NavLink>
                </li>
                <li className="navigation__item navigation-item-icon">
                    <NavLink to="/cart" className="navigation__link" onClick={closeNav}>
                        <span className="navigation-cart__icon cart"> </span>
                        {countCarts > 0 && <span className="navigation-heart__count">{countCarts}</span>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
