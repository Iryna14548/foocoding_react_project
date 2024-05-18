import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import BookList from '../Books/BookList';

export default function FavoriteBooks() {
    const { favoriteBooks } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Books</h2>
            <BookList books={favoriteBooks} />
        </>
    );
}
