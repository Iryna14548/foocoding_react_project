import { Movie, MovieResponse } from '../components/Movies/interfacesBook';

const createMovieObject = (movieDataObject: any): Movie => {
    const attribute = movieDataObject.attributes;

    const movie: Movie = {
        id: movieDataObject.id,
        title: attribute.title,
        poster: attribute.poster,
        summary: attribute.summary,
        box_office: attribute.box_office,
        budget: attribute.budget,
        cinematographers: attribute.cinematographers ?? [],
        directors: attribute.directors ?? [],
        distributors: attribute.distributors ?? [],
        editors: attribute.editors ?? [],
        music_composers: attribute.music_composers ?? [],
        producers: attribute.producers ?? [],
        rating: attribute.rating,
        release_date: attribute.release_date,
        running_time: attribute.running_time,
        screenwriters: attribute.screenwriters ?? [],
        trailer: attribute.trailer,
        wiki: attribute.wiki,
    };

    return movie;
};

export const fetchMovies = async (page: number, searchInput: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/movies?
            filter[title_i_cont_all][]=${searchInput}&
            page[number]=${page}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );

        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const movies: Movie[] = data.data.map((movieDataObject: any) => {
            return createMovieObject(movieDataObject);
        });

        const movieResponse: MovieResponse = {
            movies: movies,
            amountOfPages: data.meta.pagination.last ?? page,
        };

        return movieResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { movies: [], amountOfPages: 0 };
    }
};

export const fetchMovie = async (title: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/movies?
            filter[title_i_cont_all][]=${title}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const dataMovie = data.data[0];

        if (dataMovie) {
            return createMovieObject(dataMovie);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return null;
    }
};
