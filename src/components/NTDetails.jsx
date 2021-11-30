import React from "react";
import Book from "./Book";
import history from '../data/ntHistory';
import paul from "../data/ntPaulsLetters";
import general from "../data/ntGeneralLetters";
import prophecy from "../data/ntProphecy";

export default function NTDetails() {
    return (
        <div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">History</div>
                <div className="flex flex-wrap gap-1">
                    {history.map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Paul's Letters</div>
                <div className="flex flex-wrap gap-1">
                    {paul.map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">General Letters</div>
                <div className="flex flex-wrap gap-1">
                    {general.map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Prophecy</div>
                <div className="flex flex-wrap gap-1">
                    {prophecy.map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
        </div>
    );
}