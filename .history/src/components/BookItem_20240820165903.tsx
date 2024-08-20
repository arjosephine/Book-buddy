// src/components/BookItem.tsx
import React from 'react';

interface Book {
  id: number;
  title: string;
  genre: string;
  available: boolean;
  image: string;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="p-4 border border-gray-200 rounded shadow-sm text-center">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-gray-500">{book.genre}</p>
      <p className={`mt-2 ${book.available ? 'text-green-600' : 'text-red-600'}`}>
        {book.available ? 'Available' : 'Not Available'}
      </p>
    </div>
  );
};

export default BookItem;
