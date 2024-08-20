// src/components/BookList.tsx
import React, { useState } from 'react';
import BookItem from './BookItem';

interface Book {
  id: number;
  title: string;
  genre: string;
  available: boolean;
  image: string;
}

const sampleBooks: Book[] = [
  { id: 1, title: 'Book One', genre: 'Fiction', available: true, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Book Two', genre: 'Mystery', available: false, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Book Three', genre: 'Science Fiction', available: true, image: 'https://via.placeholder.com/150' },
];

const BookList: React.FC = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);

  const filterBooks = (genre: string) => {
    if (genre === 'All') {
      setFilteredBooks(sampleBooks);
    } else {
      setFilteredBooks(sampleBooks.filter(book => book.genre === genre));
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={() => filterBooks('All')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">All</button>
        <button onClick={() => filterBooks('Fiction')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Fiction</button>
        <button onClick={() => filterBooks('Mystery')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Mystery</button>
        <button onClick={() => filterBooks('Science Fiction')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">Science Fiction</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
