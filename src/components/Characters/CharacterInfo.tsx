import { Character } from './interfaces';
import './CharacterInfo.css';

interface CharacterProps {
    characterInfo: Character;
}

export default function CharacterInfo({ characterInfo }: CharacterProps) {
    return (
        <div className="character-info">
            <h1 className="character-info__name">{characterInfo.name}</h1>
            {characterInfo.image && (
                <img src={characterInfo.image} alt={characterInfo.name} className="character-info__image" />
            )}

            <div className="character-info__wrapper">
                {characterInfo.born && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Born:</h3>
                        <p className="character-info__text">{characterInfo.born}</p>
                    </div>
                )}
                {characterInfo.died && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Died:</h3>
                        <p className="character-info__text">{characterInfo.died}</p>
                    </div>
                )}
                {characterInfo.gender && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Gender:</h3>
                        <p className="character-info__text">{characterInfo.gender}</p>
                    </div>
                )}
                {characterInfo.blood_status && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Blood Status:</h3>
                        <p className="character-info__text">{characterInfo.blood_status}</p>
                    </div>
                )}

                {characterInfo.house && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">House:</h3>
                        <p className="character-info__text">{characterInfo.house}</p>
                    </div>
                )}

                {characterInfo.nationality && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Nationality:</h3>
                        <p className="character-info__text">{characterInfo.nationality}</p>
                    </div>
                )}

                {characterInfo.eye_color && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Eye Color:</h3>
                        <p className="character-info__text">{characterInfo.eye_color}</p>
                    </div>
                )}

                {characterInfo.hair_color && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Hair Color:</h3>
                        <p className="character-info__text">{characterInfo.hair_color}</p>
                    </div>
                )}

                {characterInfo.species && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Species:</h3>
                        <p className="character-info__text">{characterInfo.species}</p>
                    </div>
                )}
                {characterInfo.family_members?.length > 0 && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Family Members:</h3>
                        <ul className="character-info__text">
                            {characterInfo.family_members.map((member, index) => (
                                <li key={index} className="character-info__member">
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {characterInfo.jobs?.length > 0 && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label">Jobs:</h3>
                        <ul className="character-info__text">
                            {characterInfo.jobs.map((job) => (
                                <li key={job} className="character-info__job">
                                    {job}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {characterInfo.wiki && (
                    <div className="character-info__detail">
                        <h3 className="character-info__label character-info__label-wiki">Wiki Page:</h3>
                        <a
                            href={characterInfo.wiki}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="character-info__link"
                        >
                            Learn More
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
