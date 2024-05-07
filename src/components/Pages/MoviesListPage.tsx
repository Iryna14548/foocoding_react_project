import { useEffect, useState } from 'react';
import '../../Styles/Hero.css';
import { fetchMovies } from '../../api/Movie';
import { Movie, MovieResponse } from '../Movies/interfacesBook';
import MovieList from '../Movies/MovieList';
import Search from '../Generic/Search';
import Pagination from '../Generic/Pagination';

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFetchMovies = (movieResponse: MovieResponse) => {
        setMovies(movieResponse.movies);
        setAmountOfPages(movieResponse.amountOfPages);
        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchMovies(currentPage, searchInput).then(handleFetchMovies);
    }, [currentPage]);

    const handleMoviesSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchMovies(newCurrentPage, searchInput).then(handleFetchMovies);
    };
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
                <Search handleSearch={handleMoviesSearch} />
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
