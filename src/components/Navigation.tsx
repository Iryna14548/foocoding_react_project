import '../styles/Navigation.css';
import '../styles/Fonts.css';

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__header">
                <img src={'../src/images/Harry_Potter.png'} alt="Harry Potter" className="navigation__logo" />
                <h1 className="navigation__title">Harry Potter WIKI</h1>
            </div>
            <ul className="navigation__list">
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
                    <a href="#" className="navigation__link">
                        Characters
                    </a>
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
