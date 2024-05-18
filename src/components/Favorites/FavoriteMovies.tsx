import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';
import './Favorite.css';
import MovieList from '../Movies/MovieList';

export default function FavoriteMovies() {
    const { favoriteMovies } = useContext(FavoriteContext);

    return (
        <>
            <h2 className="favorite-header">My Favorite Movies</h2>
            <MovieList movies={favoriteMovies} />
        </>
    );
}
