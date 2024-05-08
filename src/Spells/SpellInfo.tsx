import './SpellInfo.css';
import { Spell } from './interfacesSpell';

interface SpellProps {
    spellInfo: Spell;
}

export default function SpellInfo({ spellInfo }: SpellProps) {
    return (
        <div className="potion-info">
            <h1 className="potion-info__name">{spellInfo.name}</h1>

            <img
                src={spellInfo.image ?? '/Spell_Icon.jpg'}
                alt={spellInfo.name}
                className="spell-info__image "
            />
            {spellInfo.name && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Name:</h3>
                    <p className="potion-info__text">{spellInfo.name}</p>
                </div>
            )}
            {spellInfo.category && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Category:</h3>
                    <p className="potion-info__text">{spellInfo.category}</p>
                </div>
            )}
            {spellInfo.effect && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Effect:</h3>
                    <p className="potion-info__text">{spellInfo.effect}</p>
                </div>
            )}
            {spellInfo.handle && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Handle:</h3>
                    <p className="potion-info__text">{spellInfo.handle}</p>
                </div>
            )}

            {spellInfo.incantation && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Incantation:</h3>
                    <p className="potion-info__text">{spellInfo.incantation}</p>
                </div>
            )}
            {spellInfo.light && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Light:</h3>
                    <p className="potion-info__text">{spellInfo.light}</p>
                </div>
            )}

            {spellInfo.creator && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Creator:</h3>
                    <p className="potion-info__text">{spellInfo.creator}</p>
                </div>
            )}
            {spellInfo.wiki && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label potion-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={spellInfo.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="potion-info__link"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
}
