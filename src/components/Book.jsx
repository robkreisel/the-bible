import React from "react";
import BookDetails from "./BookDetails";


const colors = { base: "bg-green-300", hover: "bg-green-400" };
export default function Book({ book }) {
  return (
    <div className={`p-2 md:p-3 ${colors.base} hover:${colors.hover} rounded-md shadow-md w-11 md:w-36`}>
      <BookDetails book={book} key={book.symbol} />
    </div>
  );
}