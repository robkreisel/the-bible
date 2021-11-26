import React from "react";
import BookDetails from "./BookDetails";

export default function HistoryBook({ book }) {
    return (
        <div class="p-2 sm:p-6 bg-green-300 hover:bg-green-400 rounded-md shadow-md w-10 sm:w-40">
          <BookDetails book={book} key={book.symbol} />
        </div>
    );
}