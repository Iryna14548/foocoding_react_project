import { useContext } from 'react';
import BookList from '../Books/BookList';
import { CartContext } from '../context/CartContext/CartContext';

export default function CartBooks() {
    const { cartBooks } = useContext(CartContext);

    return (
        <>
            <h2>Review your cart</h2>

            {cartBooks.length > 0 ? <BookList books={cartBooks} /> : <p>Your cart is empty</p>}
        </>
    );
}
