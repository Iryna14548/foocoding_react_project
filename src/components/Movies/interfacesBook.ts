export interface Movie {
    id: string;
    title: string;
    poster: string;
    summary: string;
    box_office: string;
    budget: string;
    cinematographers: string[];
    directors: string[];
    distributors: string[];
    editors: string[];
    music_composers: string[];
    producers: string[];
    rating: string;
    release_date: string;
    running_time: string;
    screenwriters: string[];
    trailer: string;
    wiki: string;
}

export interface MovieResponse {
    movies: Movie[];
    amountOfPages: number;
}
