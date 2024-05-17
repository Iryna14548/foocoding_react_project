export interface Book {
    id: string;
    summary: string;
    title: string;
    author: string;
    release_date: string;
    dedication: string;
    cover: string;
    pages: number;
    wiki: string;
}

export interface BookCart extends Book {
    quantity: number;
    price: number;
}

export interface BookResponse {
    books: Book[];
    amountOfPages: number;
}
