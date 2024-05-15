import { Book } from './interfacesBook';
import './BookInfo.css';
import { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext/CartContext';

interface BookProps {
    bookInfo: Book;
}

export default function BookInfo({ bookInfo }: BookProps) {
    const { cartBooks, setCartBooks } = useContext(CartContext);

    const addToCart = () => {
        if (!cartBooks.find((book) => book.id === bookInfo.id)) {
            setCartBooks([...cartBooks, bookInfo]);
        }
    };

    const removeFromCart = () => {
        setCartBooks(cartBooks.filter((book) => book.id !== bookInfo.id));
    };

    const isAdded = useMemo(() => {
        return cartBooks.find((book) => book.id === bookInfo.id) !== undefined;
    }, [cartBooks]);

    return (
        <div className="book-info">
            <h1 className="book-info__name">{bookInfo.title}</h1>

            <div className="book-info-header__details book-info__detail">
                <img src={bookInfo.cover} alt={bookInfo.title} className="book-info__image " />

                {bookInfo.summary && (
                    <p className="book-info__detail-text initial-letter">
                        {bookInfo.summary} <br />
                        <button
                            onClick={isAdded ? removeFromCart : addToCart}
                            className={`book-button navigation-cart__icon cart`}
                        >
                            {isAdded ? 'Remove from cart' : 'Add to Cart'}
                        </button>
                    </p>
                )}
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
