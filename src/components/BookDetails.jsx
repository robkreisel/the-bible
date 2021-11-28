import React from "react";

export default function BookDetails({book}) {
    return (
        <div>
            <div className="text-gray-500 text-center hidden md:block">{book.name}</div>
            <div className="text-sm md:text-5xl font-bold text-black text-center md:mb-2">{book.symbol}</div>
            <div className="text-xs font-medium text-gray-500 text-center hidden md:block">{book.author}</div>
            <div className="text-xs font-medium text-gray-500 text-center hidden md:block">{book.year}</div>
        </div>
    );
}