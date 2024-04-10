import './Navigation.css';
import '../../styles/Fonts.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleToggle = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <nav className="navigation">
            <div className="navigation__header">
                <div className="navigation-logo--wrapper">
                    <img
                        src={'../src/images/Harry_Potter.png'}
                        alt="Harry Potter"
                        className="navigation__logo"
                    />
                    <h1 className="navigation__title">Harry Potter WIKI</h1>
                </div>
                <button className={`hamburger ${isNavExpanded ? 'open' : ''}`} onClick={handleToggle}>
                    {/* Hamburger Icon */}
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
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
