import React from 'react';
import './App.css';
import HistoryBook from './components/HistoryBook';
import WritingsBook from './components/WritingsBook';
import history from './data/otHistorical';
import writings from './data/otWritings';

function App() {
  return (
  <div>
    <div className="m-3 p-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="mb-3 text-gray-400">History</div>
      <div className="flex flex-wrap gap-1">
        {history.map((book) => (
          <HistoryBook book={book} key={history.symbol} />
        ))}
      </div>
    </div>
    <div className="m-3 p-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="mb-3 text-gray-400">Writings</div>
      <div className="flex flex-wrap gap-1">
        {writings.map((book) => (
          <WritingsBook book={book} key={writings.symbol} />
        ))}
      </div>
    </div>
    <div className="m-3 p-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="mb-3 text-gray-400">Prophetic</div>
    </div>
  </div>
  );
}

export default App;
