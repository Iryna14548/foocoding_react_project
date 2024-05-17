import { BookCart } from '../../Books/interfacesBook';

export const getCartBooksFromLocalStorage = (): BookCart[] => {
    const booksJSON = window.localStorage.getItem('cartBooks');
    const cartBooksFromLocalStorage = booksJSON !== null ? JSON.parse(booksJSON) : [];
    return cartBooksFromLocalStorage;
};
