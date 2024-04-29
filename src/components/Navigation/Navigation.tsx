import './Navigation.css';
import '../../styles/Fonts.css';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import Hamburger from './Hamburger';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export default function Navigation() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { favoriteCharacters, favoritePotions } = useContext(FavoriteContext);

    const closeNav = () => {
        setIsNavExpanded(false);
    };

    const countFavorites = favoriteCharacters.length + favoritePotions.length;

    return (
        <nav className="navigation">
            <div className="navigation__header">
                <div className="navigation-logo--wrapper">
                    {/* Harry Potter Logo */}
                    <img src={'/Harry_Potter.png'} alt="Harry Potter" className="navigation__logo" />
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
                    <a href="#" className="navigation__link navigation__link-disable">
                        Books
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link navigation__link-disable">
                        Movies
                    </a>
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
            </ul>
        </nav>
    );
}
