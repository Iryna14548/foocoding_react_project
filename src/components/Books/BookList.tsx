import { Book } from './interfacesBook';
import './BookList.css';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import { Link } from 'react-router-dom';

interface BookListProps {
    books: Book[];
}

export default function BookList({ books }: BookListProps) {
    const { favoriteBooks, setFavoriteBooks } = useContext(FavoriteContext);

    const toggleFavorite = (book: Book) => {
        if (favoriteBooks.some((fav) => fav.id === book.id)) {
            setFavoriteBooks(favoriteBooks.filter((fav) => fav.id !== book.id));
        } else {
            setFavoriteBooks([...favoriteBooks, book]);
        }
    };

    return (
        <ul className="book-list__items">
            {books.map((book) => {
                // Determine if the current potion is a favorite
                const isFavorite = favoriteBooks.some((fav) => fav.id === book.id);

                return (
                    <li className="book-list__item" key={book.id}>
                        <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(book)}
                        />
                        <Link to={`/books/${book.title}`} className="book-list__anchor">
                            <img src={book.cover} alt={book.title} className="book-list__image" />
                            <h2 className="book-list__name">{book.title}</h2>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
