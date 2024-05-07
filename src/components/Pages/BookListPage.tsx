import { useEffect, useState } from 'react';
import BookList from '../Books/BookList';
import { Book, BookResponse } from '../Books/interfacesBook';
import { fetchBooks } from '../../api/BooksAPI';
import '../../Styles/Hero.css';
import Pagination from '../Generic/Pagination';
import Search from '../Generic/Search';

export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleFetchBooks = (bookResponse: BookResponse) => {
        setBooks(bookResponse.books);
        setAmountOfPages(bookResponse.amountOfPages);
        //scroll to top
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchBooks(currentPage, searchInput).then(handleFetchBooks);
    }, [currentPage]);

    const handleBooksSearch = (searchInput: string) => {
        setSearchInput(searchInput);
        const newCurrentPage = 1;
        setCurrentPage(newCurrentPage);
        fetchBooks(newCurrentPage, searchInput).then(handleFetchBooks);
    };
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
                <Search handleSearch={handleBooksSearch} />
                <BookList books={books} />
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
