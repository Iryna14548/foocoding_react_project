export interface Book {
    id: string;
    title: string;
    cover: string;
    wiki: string;
}

export interface BookResponse {
    books: Book[];
}
