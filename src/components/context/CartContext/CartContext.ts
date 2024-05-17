import React from 'react';
import { BookCart } from '../../Books/interfacesBook';

interface CartContextValue {
    cartBooks: BookCart[];
    setCartBooks: (carts: BookCart[]) => void;
}

export const CartContext = React.createContext<CartContextValue>({
    cartBooks: [],
    setCartBooks: () => {},
});
