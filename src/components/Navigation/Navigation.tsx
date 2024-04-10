import './Navigation.css';
import '../../styles/Fonts.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Navigation() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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
                    <h1 className="navigation__title">Harry Potter WIKI</h1>
                </div>
                <Hamburger isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
            </div>
            <ul className={`navigation__list ${isNavExpanded ? 'expanded' : ''}`}>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Home
                    </a>
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
            </ul>
        </nav>
    );
}
