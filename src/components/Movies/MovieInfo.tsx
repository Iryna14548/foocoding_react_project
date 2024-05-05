import { Movie } from './interfacesBook';

interface MovieProps {
    movieInfo: Movie;
}

export default function MovieInfo({ movieInfo }: MovieProps) {
    return (
        <div className="book-info">
            <h1 className="book-info__name">{movieInfo.title}</h1>

            <div className="book-info-header__details book-info__detail">
                <img src={movieInfo.poster} alt={movieInfo.title} className="book-info__image " />

                {/* {movieInfo.summary && <p className="book-info__text initial-letter">{movieInfo.summary}</p>} */}
            </div>

            {movieInfo.title && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Title:</h3>
                    <p className="book-info__text">{movieInfo.title}</p>
                </div>
            )}

            {movieInfo.wiki && (
                <div className="book-info__detail">
                    <h3 className="book-info__label book-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={movieInfo.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-info__link"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
}
