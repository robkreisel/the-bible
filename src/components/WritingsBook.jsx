import React from "react";
import BookDetails from "./BookDetails";

export default function WritingsBook({ book }) {
    return (
        <div className="p-2 md:p-3 bg-yellow-300 hover:bg-yellow-400 rounded-md shadow-md w-11 md:w-36">
          <BookDetails book={book} key={book.symbol} />
        </div>
    );
}