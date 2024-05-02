import { Book } from './interfacesBook';
import './BookInfo.css';

interface BookProps {
    bookInfo: Book;
}

export default function BookInfo({ bookInfo }: BookProps) {
    return (
        <div className="book-info">
            <h1 className="book-info__name">{bookInfo.title}</h1>

            <div className="book-info-header__details book-info__detail">
                <img
                    src={bookInfo.cover ?? '../src/images/potion.jpg'}
                    alt={bookInfo.title}
                    className="book-info__image "
                />
                {bookInfo.summary && <p className="book-info__text">{bookInfo.summary}</p>}
            </div>

            {bookInfo.title && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Title:</h3>
                    <p className="book-info__text">{bookInfo.title}</p>
                </div>
            )}

            {bookInfo.author && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Author:</h3>
                    <p className="book-info__text">{bookInfo.author}</p>
                </div>
            )}

            {bookInfo.release_date && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Release date:</h3>
                    <p className="book-info__text">{bookInfo.release_date}</p>
                </div>
            )}

            {bookInfo.dedication && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Dedication:</h3>
                    <p className="book-info__text">{bookInfo.dedication}</p>
                </div>
            )}

            {bookInfo.pages && (
                <div className="book-info__detail">
                    <h3 className="book-info__label">Pages:</h3>
                    <p className="book-info__text">{bookInfo.pages}</p>
                </div>
            )}

            {bookInfo.wiki && (
                <div className="book-info__detail">
                    <h3 className="book-info__label book-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={bookInfo.wiki}
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
