// src/components/BookList.tsx
import React, { useState, useEffect } from 'react';
import BookItem from './BookItem'; // Adjust path as needed

interface Book {
  id: number;
  title: string;
  genre: string;
  available: boolean;
  location: string; // Added location for extended filtering
  image: string;
}

interface BookListProps {
  filters: {
    [key: string]: string[];
  };
  selectedFilters: {
    [key: string]: string;
  };
}

const sampleBooks: Book[] = [
  { id: 1, title: 'Book One', genre: 'Fiction', available: true, location: 'Library A', image: 'book1.jpg' },
  { id: 2, title: 'Book Two', genre: 'Non-Fiction', available: false, location: 'Library B', image: 'book2.jpg' },
  { id: 3, title: 'Book Three', genre: 'Science', available: true, location: 'Library A', image: 'book3.jpg' },
  { id: 4, title: 'Book Four', genre: 'History', available: false, location: 'Library C', image: 'book4.jpg' },
  { id: 4, title: 'Book Five', genre: 'History', available: false, location: 'Library B', image: 'book4.jpg' },
  { id: 4, title: 'Book Six', genre: 'Fiction', available: false, location: 'Library C', image: 'book4.jpg' },
  { id: 4, title: 'Book Seven', genre: 'Auto-Biography', available: false, location: 'Library A', image: 'book4.jpg' },
  // Add more books as needed
];

const BookList: React.FC<BookListProps> = ({ filters, selectedFilters }) => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);

  useEffect(() => {
    let books = sampleBooks;

    Object.keys(selectedFilters).forEach((filterName) => {
      const filterValue = selectedFilters[filterName];
      if (filterValue) {
        books = books.filter((book) => book[filterName as keyof Book] === filterValue);
      }
    });

    setFilteredBooks(books);
  }, [selectedFilters]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
