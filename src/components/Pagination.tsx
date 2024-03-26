interface PaginationProps {
    currentPage: number;
    onCurrentPageChange: (page: number) => void;
    amountOfPages: number;
}

const Pagination = ({ currentPage, onCurrentPageChange, amountOfPages }: PaginationProps) => {
    const paginationNumbers = [];

    for (let i = 1; i <= amountOfPages; i++) {
        paginationNumbers.push(i);
    }

    return (
        <div className="pagination">
            {paginationNumbers.map((pageNumber) => (
                <button
                    onClick={() => {
                        onCurrentPageChange(pageNumber);
                    }}
                    key={pageNumber}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
