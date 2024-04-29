import { Potion } from './interfacesPotion';

interface PotionProps {
    potionInfo: Potion;
}

export default function PotionInfo({ potionInfo }: PotionProps) {
    return (
        <div className="character-info">
            <h1 className="character-info__name">{potionInfo.name}</h1>
            {potionInfo.image && (
                <img src={potionInfo.image} alt={potionInfo.name} className="character-info__image" />
            )}

            {potionInfo.wiki && (
                <div className="character-info__detail">
                    <h3 className="character-info__label character-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={potionInfo.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="character-info__link"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
}
