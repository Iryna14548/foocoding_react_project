export interface Movie {
    id: string;
    title: string;
    poster: string;
    wiki: string;
}

export interface MovieResponse {
    movies: Movie[];
}
