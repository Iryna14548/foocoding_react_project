import { Book } from '../../Books/interfacesBook';

export const getCartBooksFromLocalStorage = (): Book[] => {
    const booksJSON = window.localStorage.getItem('cartBooks');
    const cartBooksFromLocalStorage = booksJSON !== null ? JSON.parse(booksJSON) : [];
    return cartBooksFromLocalStorage;
};
