import './Navigation.css';
import '../../styles/Fonts.css';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import Hamburger from './Hamburger';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export default function Navigation() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { favoriteCharacters } = useContext(FavoriteContext);

    const closeNav = () => {
        setIsNavExpanded(false);
    };

    return (
        <nav className="navigation">
            <div className="navigation__header">
                <div className="navigation-logo--wrapper">
                    {/* Harry Potter Logo */}
                    <img
                        src={'../src/images/Harry_Potter.png'}
                        alt="Harry Potter"
                        className="navigation__logo"
                    />
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
                    <a href="#" className="navigation__link">
                        Books
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
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
                    <a href="#" className="navigation__link">
                        Potions
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Spells
                    </a>
                </li>
                <li className="navigation__item navigation-item-icon">
                    <NavLink to="/favorites" className="navigation__link" onClick={closeNav}>
                        <span className="navigation-heart__icon"> ♥ </span>
                        {favoriteCharacters.length > 0 && (
                            <span className="navigation-heart__count">{favoriteCharacters.length}</span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
