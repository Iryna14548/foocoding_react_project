import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import BookList from '../Books/BookList';

export default function FavoriteBooks() {
    const { favoriteBooks } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Books</h2>
            {favoriteBooks.length > 0 ? (
                <BookList books={favoriteBooks} />
            ) : (
                <p>You don't have any favorite books.</p>
            )}
        </>
    );
}
