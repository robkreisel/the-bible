import React from "react";
import Book from "./Book";
import data from "../data/otBookInformation";

export default function BookSet(props) {
  const symbols = props.symbols;
  return (
    <div className="flex flex-wrap gap-1">
      {symbols.map((symbol) => (
        <Book
          book={data.find(function (book) {
            return book.symbol === symbol;
          })}
        />
      ))}
    </div>
  );
}
