import React from "react";
import Book from "./Book";
import data from '../data/ntBookInformation';

export default function NTDetails() {
    return (
        <div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">History</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.category.includes("history"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Paul's Letters</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.category.includes("paulsLetter"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">General Letters</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.category.includes("generalLetter"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Prophecy</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.category.includes("prophecy"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
        </div>
    );
}