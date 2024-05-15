import React from 'react';
import { Book } from '../../Books/interfacesBook';

interface CartContextValue {
    cartBooks: Book[];
    setCartBooks: (carts: Book[]) => void;
}

export const CartContext = React.createContext<CartContextValue>({
    cartBooks: [],
    setCartBooks: () => {},
});
