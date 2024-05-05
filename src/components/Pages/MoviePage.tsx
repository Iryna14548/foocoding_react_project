import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Generic/Loading';
import { Movie } from '../Movies/interfacesBook';
import { fetchMovie } from '../../api/Movie';
import MovieInfo from '../Movies/MovieInfo';

export default function MoviePage() {
    const { title } = useParams();
    const [movieInfo, setMovieInfo] = useState<Movie | null>(null);

    useEffect(() => {
        if (title) {
            fetchMovie(encodeURIComponent(title)).then((data) => {
                setMovieInfo(data);
            });
        }
    }, [title]);

    if (!movieInfo) return <Loading />;

    return (
        <>
            <MovieInfo movieInfo={movieInfo} />
        </>
    );
}
