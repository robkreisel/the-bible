import React from "react";
import BookDetails from "./BookDetails";


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
      <BookDetails book={book} key={book.symbol} />
    </div>
  );
}