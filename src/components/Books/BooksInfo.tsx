import { Book } from './interfacesBook';

interface BookProps {
    bookInfo: Book;
}

export default function BookInfo({ bookInfo }: BookProps) {
    return (
        <div className="potion-info">
            <h1 className="potion-info__name">{bookInfo.title}</h1>

            <img
                src={bookInfo.cover ?? '../src/images/potion.jpg'}
                alt={bookInfo.title}
                className="potion-list__image"
            />
            {bookInfo.title && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label">Title:</h3>
                    <p className="potion-info__text">{bookInfo.title}</p>
                </div>
            )}

            {bookInfo.wiki && (
                <div className="potion-info__detail">
                    <h3 className="potion-info__label potion-info__label-wiki">Wiki Page:</h3>
                    <a
                        href={bookInfo.wiki}
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
