import { useState } from 'react';
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    onCurrentPageChange: (page: number) => void;
    amountOfPages: number;
}

const Pagination = ({ currentPage, onCurrentPageChange, amountOfPages }: PaginationProps) => {
    const [inputPage, setInputPage] = useState(currentPage.toString());
    const paginationNumbers = [];

    let startValue = 1;
    if (currentPage > 3) {
        startValue = currentPage - 2;
        paginationNumbers.push(1);
    }

    let endValue = currentPage + 2;

    if (endValue > amountOfPages) {
        endValue = amountOfPages;
    }

    for (let i = startValue; i <= endValue; i++) {
        paginationNumbers.push(i);
    }

    if (endValue < amountOfPages) {
        paginationNumbers.push(amountOfPages);
    }

    const handlePageChange = () => {
        const newPageNumber = parseInt(inputPage);
        if (newPageNumber > 0 && newPageNumber <= amountOfPages) {
            onCurrentPageChange(newPageNumber);
        }
    };

    return (
        <>
            <div className="pagination">
                {paginationNumbers.map((pageNumber) => (
                    <button
                        onClick={() => {
                            onCurrentPageChange(pageNumber);
                            setInputPage(pageNumber.toString());
                        }}
                        key={pageNumber}
                        className={`pagination-button ${
                            pageNumber === 1 && startValue > 1 ? ' pagination-button__margin-right' : ''
                        } ${
                            pageNumber === amountOfPages && endValue < amountOfPages
                                ? ' pagination-button__margin-left'
                                : ''
                        } ${currentPage === pageNumber ? ' pagination-button__active' : ''}`}
                    >
                        {pageNumber}
                    </button>
                ))}
                <div className="pagination-input-wrapper">
                    <p>Go to Page:</p>
                    <input
                        className="pagination-input"
                        type="text"
                        value={inputPage}
                        onChange={(event) => {
                            setInputPage(event.target.value);
                        }}
                        onBlur={() => {
                            handlePageChange();
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handlePageChange();
                            }
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Pagination;
