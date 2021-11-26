import React from "react";

export default function Book({ book }) {
    return (
        <div class="p-2 sm:p-6 bg-blue-300 hover:bg-blue-400 rounded-md shadow-md w-10 sm:w-40">
          <div>
            <div className="text-sm font-medium text-black hidden sm:block">{book.year}</div>
            <div className="text-sm font-light text-gray-500 hidden sm:block">{book.era}</div>
            <div class="text-sm sm:text-6xl font-bold text-black text-center">{book.symbol}</div>
            <p class="text-gray-500 text-center hidden sm:block">{book.name}</p>
            <p className="font-medium text-black text-center hidden sm:block">{book.author}</p>
          </div>
        </div>
    );
}