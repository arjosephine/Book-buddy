// src/components/BookList.tsx
import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';

interface Book {
  id: number;
  title: string;
  genre: string;
  available: boolean;
  image: string;
}

interface BookListProps {
  availabilityFilter: string;
  genreFilter: string;
}

const sampleBooks: Book[] = [
  { id: 1, title: 'Book One', genre: 'fiction', available: true, image: 'book1.jpg' },
  { id: 2, title: 'Book Two', genre: 'non-fiction', available: false, image: 'book2.jpg' },
  { id: 3, title: 'Book Three', genre: 'science', available: true, image: 'book3.jpg' },
  { id: 4, title: 'Book Four', genre: 'history', available: false, image: 'book4.jpg' },
  // Add more books as needed
];

const BookList: React.FC<BookListProps> = ({ availabilityFilter, genreFilter }) => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);

  useEffect(() => {
    let books = sampleBooks;

    if (availabilityFilter) {
      books = books.filter(book => book.available === (availabilityFilter === 'available'));
    }

    if (genreFilter) {
      books = books.filter(book => book.genre === genreFilter);
    }

    setFilteredBooks(books);
  }, [availabilityFilter, genreFilter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
