import { useContext, useMemo, useState } from 'react';
import './CartPage.css';

import { CartContext } from '../context/CartContext/CartContext';
import CartBookItem from '../Cart/CartBookItem';
import UserForm from '../Cart/UserForm';

export default function CartPage() {
    const { cartBooks, setCartBooks } = useContext(CartContext);
    const [orderIsFinished, setOrderIsFinished] = useState(false);

    const total = useMemo(() => {
        return cartBooks.reduce((acc, book) => {
            return acc + book.price * book.quantity;
        }, 0);
    }, [cartBooks]);

    const handleOrderIsFinished = () => {
        setCartBooks([]);
        setOrderIsFinished(true);
    };

    return orderIsFinished ? (
        <div>
            <h2 className="cart-header">Thank you for your order!</h2>
            <p className="cart-header__paragraph">Your order has been placed successfully.</p>
        </div>
    ) : cartBooks.length <= 0 ? (
        <>
            <h2 className="cart-header">Your cart is empty</h2>
            <p className="cart-header__paragraph">You have not added any books to your cart yet.</p>
        </>
    ) : (
        <>
            <h2 className="cart-header">Review your cart</h2>
            <p className="cart-header__paragraph">Here are the books you have added to your cart:</p>

            <ul className="cart-list__items">
                {cartBooks.map((book) => {
                    return <CartBookItem book={book} key={book.id} />;
                })}
            </ul>

            <div className="cart-total__wrapper">
                <p className="cart-total">Total amount</p>
                <p className="cart-total__amount"> {total} kr SEK</p>
            </div>

            <UserForm handleOrderIsFinished={handleOrderIsFinished} />
        </>
    );
}
