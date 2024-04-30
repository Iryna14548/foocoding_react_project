import { Book } from './interfacesBook';
import './BookList.css';

interface PotionListProps {
    books: Book[];
}

export default function BookList({ books }: PotionListProps) {
    return (
        <ul className="book-list__items">
            {books.map((book) => {
                // // Determine if the current potion is a favorite
                // const isFavorite = favoritePotions.some((fav) => fav.id === potion.id);

                return (
                    <li className="book-list__item" key={book.id}>
                        {/* <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(potion)}
                        /> */}
                        {/* <Link to={`/books/${book.title}`} className="potion-list__anchor"> */}
                        <img src={book.cover} alt={book.title} className="book-list__image" />
                        <h2 className="book-list__name">{book.title}</h2>
                        {/* <p className="potion-list__effect">{book.effect ?? 'Potion'}</p> */}
                        {/* </Link> */}
                    </li>
                );
            })}
        </ul>
    );
}
