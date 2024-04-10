import './Hamburger.css';

interface HamburgerProps {
    isNavExpanded: boolean;
    setIsNavExpanded: (isNavExpanded: boolean) => void;
}

export default function Hamburger({ isNavExpanded, setIsNavExpanded }: HamburgerProps) {
    const handleToggle = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    return (
        <button className={`hamburger ${isNavExpanded ? 'open' : ''}`} onClick={handleToggle}>
            {/* Hamburger Icon */}
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </button>
    );
}
