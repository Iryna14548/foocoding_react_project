import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Generic/Loading';
import { Book } from '../Books/interfacesBook';
import { fetchBook } from '../../api/BooksAPI';
import BookInfo from '../Books/BookInfo';

export default function BookPage() {
    const { title } = useParams();
    const [bookInfo, setBookInfo] = useState<Book | null>(null);

    useEffect(() => {
        if (title) {
            fetchBook(encodeURIComponent(title)).then((data) => {
                setBookInfo(data);
            });
        }
    }, [title]);

    if (!bookInfo) return <Loading />;

    return (
        <>
            <BookInfo bookInfo={bookInfo} />
        </>
    );
}
