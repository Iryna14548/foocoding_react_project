import { useEffect, useState } from 'react';
import '../../Styles/Hero.css';
import { fetchMovies } from '../../api/Movie';
import { Movie, MovieResponse } from '../Movies/interfacesBook';
import MovieList from '../Movies/MovieList';

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleFetchMovies = (movieResponse: MovieResponse) => {
        setMovies(movieResponse.movies);

        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchMovies().then(handleFetchMovies);
    }, []);
    return (
        <>
            <div>
                <h1 className="hero__title">Movie List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>
                <p className="hero__preamble">
                    Explore the magic on screen with our Harry Potter movie list! Journey through each chapter
                    of the saga and experience the enchantment, battles, and friendships of the wizarding
                    world. Watch the adventures unfold.
                </p>

                <MovieList movies={movies} />
            </div>
        </>
    );
}
