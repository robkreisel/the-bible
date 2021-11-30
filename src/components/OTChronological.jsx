import React from "react";
import Book from "./Book";
import history from '../data/otHistory';
import writings from '../data/otWritings';
import prophecy from '../data/otProphecy';

export default function OTChronological() {

    return (
        <div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Creation</div>
                <div className="flex flex-wrap gap-1">
                    {history.filter(function (book) { return book.era.includes("creation"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Patriarch</div>
                <div className="grid grid-rows-2 gap-1">
                    {history.filter(function (book) { return book.era.includes("patriarch"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                    {writings.filter(function (book) { return book.era.includes("patriarch"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Exodus</div>
                <div className="flex">
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-1">
                        {history.filter(function (book) { return book.era.includes("exodus"); }).map((book) => (
                            <Book book={book} key={book.symbol} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Conquest</div>
                <div className="flex flex-wrap gap-1">
                    {history.filter(function (book) { return book.era.includes("conquest"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Judges</div>
                <div className="grid grid-row-2 gap-1">
                    {history.filter(function (book) { return book.era.includes("judges"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Kingdom</div>
                <div className="flex">
                    <div className="grid grid-cols-4 justify-items-end gap-1">
                        {history.filter(function (book) { return book.era.includes("kingdom"); }).map((book) => (
                            <Book book={book} key={book.symbol} />
                        ))}
                        <Book book={prophecy.find(function (book) { return book.symbol === "Ob" })} />
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Exile</div>
                <div className="flex flex-wrap gap-1">
                    {history.filter(function (book) { return book.era.includes("exile"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Return</div>
                <div className="flex flex-wrap gap-1">
                    {history.filter(function (book) { return book.era.includes("return"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
        </div>
    );
}