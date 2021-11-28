import React from "react";
import BookDetails from "./BookDetails";

export default function ProphecyBook({ book }) {
    return (
        <div className="p-2 md:p-3 bg-purple-300 hover:bg-purple-400 rounded-md shadow-md w-11 md:w-36">
          <BookDetails book={book} key={book.symbol} />
        </div>
    );
}