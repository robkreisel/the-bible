import React from "react";
import BookDetails from "./BookDetails";

export default function HistoryBook({ book }) {
    return (
        <div className="p-2 sm:p-3 bg-green-300 hover:bg-green-400 rounded-md shadow-md w-10 sm:w-36">
          <BookDetails book={book} key={book.symbol} />
        </div>
    );
}