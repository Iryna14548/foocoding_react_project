import { Link } from 'react-router-dom';
import { Movie } from './interfacesBook';

interface MovieListProps {
    movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
    // const { favoriteMovies, setFavoriteMovies } = useContext(FavoriteContext);

    // const toggleFavorite = (movies: Movie) => {
    //     if (favoriteBooks.some((fav) => fav.id === book.id)) {
    //         setFavoriteBooks(favoriteBooks.filter((fav) => fav.id !== book.id));
    //     } else {
    //         setFavoriteBooks([...favoriteBooks, book]);
    //     }
    // };

    return (
        <ul className="book-list__items">
            {movies.map((movie) => {
                // Determine if the current potion is a favorite
                // const isFavorite = favoriteBooks.some((fav) => fav.id === book.id);

                return (
                    <li className="book-list__item" key={movie.id}>
                        {/* <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(book)}
                        /> */}
                        <Link to={`/movies/${movie.title}`} className="potion-list__anchor">
                            <img src={movie.poster} alt={movie.title} className="book-list__image" />
                            <h2 className="book-list__name">{movie.title}</h2>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
