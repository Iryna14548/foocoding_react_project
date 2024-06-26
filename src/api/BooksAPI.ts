import { Book, BookResponse } from '../components/Books/interfacesBook';

const createBookObject = (bookDataObject: any): Book => {
    const attribute = bookDataObject.attributes;

    const book: Book = {
        id: bookDataObject.id,
        summary: attribute.summary,
        title: attribute.title,
        author: attribute.author,
        release_date: attribute.release_date,
        dedication: attribute.dedication,
        cover: attribute.cover,
        pages: attribute.pages,
        wiki: attribute.wiki,
    };

    return book;
};

export const fetchBooks = async (page: number, searchInput: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/books?
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

        const books: Book[] = data.data.map((bookDataObject: any) => {
            return createBookObject(bookDataObject);
        });

        const bookResponse: BookResponse = {
            books: books,
            amountOfPages: data.meta.pagination.last ?? page,
        };

        return bookResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { books: [], amountOfPages: 0 };
    }
};

export const fetchBook = async (title: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/books?
            filter[title_i_cont_all][]=${title}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const dataBook = data.data[0];

        if (dataBook) {
            return createBookObject(dataBook);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return null;
    }
};
