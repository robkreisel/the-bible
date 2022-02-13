import React from "react";
import IBook from "../@types/IBook";

export default function Book({ book }) {
  const colors = {
    history: "green",
    writing: "yellow",
    prophecy: "purple",
    paulsLetter: "blue",
    generalLetter: "red",
  };

  return (
    <div
      className={`p-2 bg-${colors[book.category]}-300 hover:bg-${
        colors[book.category]
      }-400 rounded-md shadow-md w-11 md:w-20 lg:w-24 xl:w-28 2xl:w-32`}
    >
      <div className="text-gray-500 text-center hidden xl:block lg:text-xs 2xl:text-base">
        {book.name}
      </div>
      <div className="text-sm md:text-2xl lg:text-3xl xl:text-5xl font-bold text-black text-center md:mb-2">
        {book.symbol}
      </div>
      <div className="text-xs font-medium text-gray-500 text-center hidden xl:block">
        {book.author}
      </div>
      <div className="text-xs font-medium text-gray-500 text-center hidden xl:block">
        {book.year}
      </div>
    </div>
  );
}
