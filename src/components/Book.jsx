import React from "react";


export default function Book({ book }) {

  var categoryColor = "red";

  switch (book.category) {
    case "history":
      categoryColor = "green";
      break;
    case "writing":
      categoryColor = "yellow";
      break;
    case "prophecy":
      categoryColor = "purple";
      break;
    case "paulsLetter":
      categoryColor = "blue";
      break;
    case "generalLetter":
      categoryColor = "red";
      break;
    default:
      categoryColor = "white";
  }

  const colors = {
    base: categoryColor,
  };

  return (
    <div className={`p-2 md:p-3 bg-${colors.base}-300 hover:bg-${colors.base}-400 rounded-md shadow-md w-11 md:w-36`}>
      <div className="text-gray-500 text-center hidden md:block">{book.name}</div>
      <div className="text-sm md:text-5xl font-bold text-black text-center md:mb-2">{book.symbol}</div>
      <div className="text-xs font-medium text-gray-500 text-center hidden lg:block">{book.author}</div>
      <div className="text-xs font-medium text-gray-500 text-center hidden lg:block">{book.year}</div>
    </div>
  );
}