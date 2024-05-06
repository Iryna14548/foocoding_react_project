import { Link } from 'react-router-dom';
import { Movie } from './interfacesBook';
import './MovieList.css';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

interface MovieListProps {
    movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
    const { favoriteMovies, setFavoriteMovies } = useContext(FavoriteContext);

    const toggleFavorite = (movie: Movie) => {
        if (favoriteMovies.some((fav) => fav.id === movie.id)) {
            setFavoriteMovies(favoriteMovies.filter((fav) => fav.id !== movie.id));
        } else {
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    };

    return (
        <ul className="movie-list__items">
            {movies.map((movie) => {
                //Determine if the current potion is a favorite
                const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

                return (
                    <li className="movie-list__item" key={movie.id}>
                        <div
                            className={`heart ${isFavorite ? 'filled' : 'outlined'}`}
                            onClick={() => toggleFavorite(movie)}
                        />
                        <Link to={`/movies/${movie.title}`} className="movie-list__anchor">
                            <img src={movie.poster} alt={movie.title} className="movie-list__image" />
                            <h2 className="movie-list__name">{movie.title}</h2>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
