import { useCallback, useEffect, useRef, useState } from 'react';
import '../../Styles/Hero.css';
import { fetchMovies } from '../../api/Movie';
import { Movie, MovieResponse } from '../Movies/interfacesBook';
import MovieList from '../Movies/MovieList';
import Search from '../Generic/Search';
import Pagination from '../Generic/Pagination';

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>(window.history.state?.movies ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');
    const moviesListRef = useRef<HTMLDivElement>(null);

    const handleFetchMovies = useCallback(
        (movieResponse: MovieResponse) => {
            setMovies(movieResponse.movies);
            setAmountOfPages(movieResponse.amountOfPages);

            // Scroll to top
            if (moviesListRef.current! && currentPage !== 1) {
                moviesListRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        },
        [currentPage]
    );

    useEffect(() => {
        fetchMovies(currentPage, searchInput).then(handleFetchMovies);
    }, [currentPage, handleFetchMovies, searchInput]);

    const handleMoviesSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchMovies(newCurrentPage, searchInput).then(handleFetchMovies);
    };

    useEffect(() => {
        window.history.replaceState(
            {
                ...window.history.state,
                movies,
                currentPage,
                amountOfPages,
                searchInput,
            },
            ''
        );
    }, [movies, currentPage, amountOfPages, searchInput]);

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
                <div ref={moviesListRef}>
                    <Search handleSearch={handleMoviesSearch} />
                </div>
                <MovieList movies={movies} />
            </div>
            <Pagination
                currentPage={currentPage}
                onCurrentPageChange={(page: number) => {
                    setCurrentPage(page);
                }}
                amountOfPages={amountOfPages}
            />
        </>
    );
}
