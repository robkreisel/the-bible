import React from "react";


export default function Book({ book }) {

  const colors = {
    history: "green",
    writing: "yellow",
    prophecy: "purple",
    paulsLetter: "blue",
    generalLetter: "red"
  };

  return (
    <div className={`p-2 md:p-3 bg-${colors[book.category]}-300 hover:bg-${colors[book.category]}-400 rounded-md shadow-md w-11 md:w-36`}>
      <div className="text-gray-500 text-center hidden md:block">{book.name}</div>
      <div className="text-sm md:text-5xl font-bold text-black text-center md:mb-2">{book.symbol}</div>
      <div className="text-xs font-medium text-gray-500 text-center hidden lg:block">{book.author}</div>
      <div className="text-xs font-medium text-gray-500 text-center hidden lg:block">{book.year}</div>
    </div>
  );
}