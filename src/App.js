import React from 'react';
import './App.css';

function App2() {
  return (
  <div>
    <div className="m-3 p-3 sm:m-10 bg-gray-100 shadow-md overflow-hidden">
      <div className="text-gray-400">History</div>
      <div>
      <div class="p-2 sm:p-6 bg-blue-300 hover:bg-blue-400 rounded-md shadow-md w-10 sm:w-40">
        <div>
          <div className="text-sm font-medium text-black hidden sm:block">1430</div>
          <div className="text-sm font-light text-gray-500 hidden sm:block">BC</div>
          <div class="text-sm sm:text-6xl font-bold text-black text-center">Ge</div>
          <p class="text-gray-500 text-center hidden sm:block">GENESIS</p>
          <p className="font-medium text-black text-center hidden sm:block">Moses</p>
        </div>
      </div>
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

export default App2;
