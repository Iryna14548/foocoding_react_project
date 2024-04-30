import { useEffect, useState } from 'react';
import BookList from '../Books/BookList';
import { Book, BookResponse } from '../Books/interfacesBook';
import { fetchBooks } from '../../api/BooksAPI';

export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>([]);

    const handleFetchBooks = (bookResponse: BookResponse) => {
        setBooks(bookResponse.books);

        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchBooks().then(handleFetchBooks);
    }, []);

    return (
        <>
            <div>
                <h1 className="hero__title">Book List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>
                <p className="hero__preamble">
                    Dive into the pages of Harry Potter's world! Browse our collection of magical books that
                    take you from Hogwarts to beyond. Discover stories of adventure, mystery, and the magic of
                    friendship!
                </p>

                <BookList books={books} />
            </div>
        </>
    );
}
