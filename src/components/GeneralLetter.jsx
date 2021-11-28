import React from "react";
import BookDetails from "./BookDetails";

export default function GeneralLetter({ book }) {
    return (
        <div className="p-2 md:p-3 bg-red-300 hover:bg-red-400 rounded-md shadow-md w-11 md:w-36">
          <BookDetails book={book} key={book.symbol} />
        </div>
    );
}