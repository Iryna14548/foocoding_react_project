import { useContext } from 'react';
import './CartPage.css';

import { CartContext } from '../context/CartContext/CartContext';
import CartBookItem from '../Cart/CartBookItem';

export default function CartPage() {
    const { cartBooks } = useContext(CartContext);

    return (
        <>
            <h2 className="cart-header">Review your cart</h2>
            <p className="cart-header__paragraph">Here are the books you have added to your cart:</p>

            <ul className="cart-list__items">
                {cartBooks.map((book) => {
                    return <CartBookItem book={book} key={book.id} />;
                })}
            </ul>
        </>
    );
}
