import { useContext } from 'react';
import './CartPage.css';

import { CartContext } from '../context/CartContext/CartContext';
import { Book } from '../Books/interfacesBook';

export default function CartPage() {
    const { cartBooks, setCartBooks } = useContext(CartContext);

    const removeFromCart = (bookToDelete: Book) => {
        setCartBooks(cartBooks.filter((book) => book.id !== bookToDelete.id));
    };

    const addQuantity = (bookToAdd: Book) => {
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

    const removeQuantity = (bookToRemove: Book) => {
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

    return (
        <>
            <h2 className="cart-header">Review your cart</h2>
            <p className="cart-header__paragraph">Here are the books you have added to your cart:</p>

            <ul className="cart-list__items">
                {cartBooks.map((book) => {
                    return (
                        <li className="cart-list__item">
                            <div className="cart-list__image-wrapper">
                                <img src={book.cover} alt={book.title} className="cart-list__image" />
                            </div>
                            <div className="cart-list__details-wrapper">
                                <div className="cart-list__name-wrapper">
                                    <h3 className="cart-list__name">{book.title}</h3>

                                    <span className="cart-list__quantity">Quantity</span>
                                    <button className="cart-list__button">
                                        <button
                                            className="cart-list__button-count"
                                            onClick={() => {
                                                removeQuantity(book);
                                            }}
                                        >
                                            -
                                        </button>{' '}
                                        {book.quantity}{' '}
                                        <button
                                            className="cart-list__button-count"
                                            onClick={() => {
                                                addQuantity(book);
                                            }}
                                        >
                                            +
                                        </button>
                                    </button>
                                </div>
                                <div className="cart-list__price-wrapper">
                                    <p className="cart-list__price">{book.price} kr SEK</p>
                                    <button
                                        className="cart-list__remove-button"
                                        onClick={() => {
                                            removeFromCart(book);
                                        }}
                                    >
                                        remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
