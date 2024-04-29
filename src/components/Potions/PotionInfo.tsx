import { Potion } from './interfacesPotion';
import './PotionInfo.css';

interface PotionProps {
    potionInfo: Potion;
}

export default function PotionInfo({ potionInfo }: PotionProps) {
    return (
        <div className="potion-info">
            <h1 className="potion-info__name">{potionInfo.name}</h1>

            <img
                src={potionInfo.image ?? '../src/images/potion.jpg'}
                alt={potionInfo.name}
                className="potion-list__image"
            />
            {potionInfo.name && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Name:</h3>
                    <p className="potion-info__text">{potionInfo.name}</p>
                </div>
            )}
            {potionInfo.effect && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Effect:</h3>
                    <p className="potion-info__text">{potionInfo.effect}</p>
                </div>
            )}
            {potionInfo.characteristics && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Characteristics:</h3>
                    <p className="potion-info__text">{potionInfo.characteristics}</p>
                </div>
            )}
            {potionInfo.difficulty && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Difficulty:</h3>
                    <p className="potion-info__text">{potionInfo.difficulty}</p>
                </div>
            )}

            {potionInfo.ingredients && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Ingredients:</h3>
                    <p className="potion-info__text">{potionInfo.ingredients}</p>
                </div>
            )}
            {potionInfo.inventors && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Inventors:</h3>
                    <p className="potion-info__text">{potionInfo.inventors}</p>
                </div>
            )}

            {potionInfo.wiki && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label potion-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={potionInfo.wiki}
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
