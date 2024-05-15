import { useCallback, useEffect, useRef, useState } from 'react';
import BookList from '../Books/BookList';
import { Book, BookResponse } from '../Books/interfacesBook';
import { fetchBooks } from '../../api/BooksAPI';
import '../../Styles/Hero.css';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';

export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>(window.history.state?.books ?? []);
    const [currentPage, setCurrentPage] = useState(window.history.state?.currentPage ?? 1);
    const [amountOfPages, setAmountOfPages] = useState(window.history.state?.amountOfPages ?? 0);
    const [searchInput, setSearchInput] = useState(window.history.state?.searchInput ?? '');
    const bookListRef = useRef<HTMLDivElement>(null);

    const handleFetchBooks = useCallback(
        (bookResponse: BookResponse) => {
            setBooks(bookResponse.books);
            setAmountOfPages(bookResponse.amountOfPages);

            // Scroll to top
            if (bookListRef.current! && currentPage !== 1) {
                bookListRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        },
        [currentPage]
    );

    useEffect(() => {
        fetchBooks(currentPage, searchInput).then(handleFetchBooks);
    }, [currentPage, searchInput]);

    const handleBooksSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchBooks(newCurrentPage, searchInput).then(handleFetchBooks);
    };

    useEffect(() => {
        window.history.replaceState(
            {
                ...window.history.state,
                books,
                currentPage,
                amountOfPages,
                searchInput,
            },
            ''
        );
    }, [books, currentPage, amountOfPages, searchInput]);

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
                <div ref={bookListRef}>
                    <Search handleSearch={handleBooksSearch} />
                </div>
                <BookList books={books} />
            </div>
            <Pagination
                currentPage={currentPage}
                onCurrentPageChange={(page: number) => {
                    setCurrentPage(page);
                    if (page === currentPage) {
                    }
                }}
                amountOfPages={amountOfPages}
            />
        </>
    );
}
