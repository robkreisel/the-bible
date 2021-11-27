import React from "react";

export default function BookDetails({book}) {
    return (
        <div>
            <div className="text-sm font-medium text-black hidden sm:block">{book.year}</div>
            <div className="text-sm font-light text-gray-500 hidden sm:block">{book.era}</div>
            <div className="text-sm sm:text-6xl font-bold text-black text-center">{book.symbol}</div>
            <p className="text-gray-500 text-center hidden sm:block">{book.name}</p>
            <p className="font-medium text-black text-center hidden sm:block">{book.author}</p>
        </div>
    );
}