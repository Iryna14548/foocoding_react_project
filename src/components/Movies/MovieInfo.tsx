import { Movie } from './interfacesBook';
import './MovieInfo.css';

interface MovieProps {
    movieInfo: Movie;
}

export default function MovieInfo({ movieInfo }: MovieProps) {
    return (
        <div className="movie-info">
            <h1 className="movie-info__name">{movieInfo.title}</h1>

            <div className="movie-info-header__details movie-info__detail">
                <img src={movieInfo.poster} alt={movieInfo.title} className="movie-info__image " />

                {movieInfo.summary && (
                    <p className="movie-info__summary-text initial-letter">
                        {movieInfo.summary}
                        <a
                            href={movieInfo.trailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="movie-info-trailer"
                        >
                            Watch Trailer
                        </a>
                    </p>
                )}
            </div>

            {movieInfo.title && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Title:</h3>
                    <p className="movie-info__text">{movieInfo.title}</p>
                </div>
            )}

            {movieInfo.release_date && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Release date:</h3>
                    <p className="movie-info__text">{movieInfo.release_date}</p>
                </div>
            )}

            {movieInfo.budget && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Budget:</h3>
                    <p className="movie-info__text">{movieInfo.budget}</p>
                </div>
            )}
            {movieInfo.box_office && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Box office:</h3>
                    <p className="movie-info__text">{movieInfo.box_office}</p>
                </div>
            )}

            {movieInfo.rating && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Rating:</h3>
                    <p className="movie-info__text">{movieInfo.rating}</p>
                </div>
            )}

            {movieInfo.directors?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Directors:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.directors.map((director, index) => (
                            <li key={index} className="movie-info__member">
                                {director}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.distributors?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Distributors:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.distributors.map((distributor, index) => (
                            <li key={index} className="movie-info__member">
                                {distributor}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.editors?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Editors:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.editors.map((editor, index) => (
                            <li key={index} className="movie-info__member">
                                {editor}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.music_composers?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Music composers:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.music_composers.map((music_composer, index) => (
                            <li key={index} className="movie-info__member">
                                {music_composer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.producers?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Producers:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.producers.map((producer, index) => (
                            <li key={index} className="movie-info__member">
                                {producer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.screenwriters?.length > 0 && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Screenwriters:</h3>
                    <ul className="movie-info__text">
                        {movieInfo.producers.map((screenwriter, index) => (
                            <li key={index} className="movie-info__member">
                                {screenwriter}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {movieInfo.running_time && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label">Running time:</h3>
                    <p className="movie-info__text">{movieInfo.running_time}</p>
                </div>
            )}
            {movieInfo.wiki && (
                <div className="movie-info__detail">
                    <h3 className="movie-info__label movie-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={movieInfo.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="movie-info__link"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
}
