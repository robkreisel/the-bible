import React from 'react';
import './App.css';
import Book from './components/book';
import books from './data/books';

function App() {
  return (
  <div>
    <div className="m-3 p-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="text-gray-400">History</div>
      <div className="flex flex-wrap gap-1">
        {books.map((book) => (
          <Book book={book} key={books.symbol} />
        ))}
      </div>
    </div>
    <div className="m-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="text-gray-400">Writings</div>
    </div>
    <div className="m-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="text-gray-400">Prophetic</div>
    </div>
  </div>
  );
}

export default App;
