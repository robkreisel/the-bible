import React from 'react';
import './App.css';
import HistoryBook from './components/HistoryBook';
import WritingsBook from './components/WritingsBook';
import ProphecyBook from './components/ProphecyBook';
import history from './data/otHistory';
import writings from './data/otWritings';
import prophecy from './data/otProphecy';

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
      <div className="flex flex-wrap gap-1">
        {prophecy.map((book) => (
          <ProphecyBook book={book} key={prophecy.symbol} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default App;
