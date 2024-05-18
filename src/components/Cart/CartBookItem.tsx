import { useContext, useMemo } from 'react';
import { BookCart } from '../Books/interfacesBook';
import { CartContext } from '../context/CartContext/CartContext';
import './CartBookItem.css';

interface CartBookItemProps {
    book: BookCart;
}

export default function CartBookItem({ book }: CartBookItemProps) {
    const { cartBooks, setCartBooks } = useContext(CartContext);

    const removeFromCart = (bookToDelete: BookCart) => {
        setCartBooks(cartBooks.filter((book) => book.id !== bookToDelete.id));
    };

    const addQuantity = (bookToAdd: BookCart) => {
        setCartBooks(
            cartBooks.map((book) => {
                if (book.id === bookToAdd.id) {
                    return {
                        ...book,

                        quantity: book.quantity < 10 ? book.quantity + 1 : book.quantity,
                    };
                }
                return book;
            })
        );
    };

    const removeQuantity = (bookToRemove: BookCart) => {
        setCartBooks(
            cartBooks.map((book) => {
                if (book.id === bookToRemove.id) {
                    return {
                        ...book,
                        quantity: book.quantity > 1 ? book.quantity - 1 : 1,
                    };
                }
                return book;
            })
        );
    };

    const bookPrice = useMemo(() => {
        return book.price * book.quantity;
    }, [book.price, book.quantity]);

    return (
        <li className="cart-list-item">
            <div className="cart-list-item__image-wrapper">
                <img src={book.cover} alt={book.title} className="cart-list-item__image" />
            </div>
            <div className="cart-list-item__details-wrapper">
                <div className="cart-list-item__name-wrapper">
                    <h3 className="cart-list-item__name">{book.title}</h3>

                    <span className="cart-list-item__quantity">Quantity</span>
                    <span className="cart-list-item__span">
                        <button
                            className="cart-list-item__button-count"
                            onClick={() => {
                                removeQuantity(book);
                            }}
                        >
                            -
                        </button>{' '}
                        {book.quantity}{' '}
                        <button
                            className="cart-list-item__button-count"
                            onClick={() => {
                                addQuantity(book);
                            }}
                        >
                            +
                        </button>
                    </span>
                </div>
                <div className="cart-list-item__price-wrapper">
                    <p className="cart-list-item__price">{bookPrice} kr SEK</p>
                    <span
                        className="cart-list-item__remove-icon"
                        onClick={() => {
                            removeFromCart(book);
                        }}
                    ></span>
                </div>
            </div>
        </li>
    );
}
