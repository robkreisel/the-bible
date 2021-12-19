import React from "react";
import Book from "./Book";
import data from '../data/otBookInformation';


export default function OTChronological() {

    const kingdomSymbols = ['1Sa', '2Sa', '1Ki', '2Ki'];


    return (
        <div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Creation</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.era.includes("creation"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Patriarch</div>
                <div className="flex">
                    <div className="grid grid-cols-2 gap-1">
                        {data.filter(function (book) { return book.era.includes("patriarch"); }).map((book) => (
                            <Book book={book} key={book.symbol} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Exodus</div>
                <div className="flex">
                    <div className="grid grid-rows-2 grid-cols-2 gap-1">
                        {data.filter(function (book) { return book.era.includes("exodus"); }).map((book) => (
                            <Book book={book} key={book.symbol} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Conquest</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.era.includes("conquest"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Judges</div>
                <div className="flex">
                    <div className="grid grid-cols-2 gap-1">
                        {data.filter(function (book) { return book.era.includes("judges"); }).map((book) => (
                            <Book book={book} key={book.symbol} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Kingdom</div>
                <div className="flex">
                    <div className="grid grid-rows-4 gap-1">
                        {kingdomSymbols.map(function (symbol) {
                            return <Book book={data.find(function (book) { return book.symbol === symbol })} />
                        })}
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Exile</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.era.includes("exile"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
                <div className="mb-3 text-gray-400">Return</div>
                <div className="flex flex-wrap gap-1">
                    {data.filter(function (book) { return book.era.includes("return"); }).map((book) => (
                        <Book book={book} key={book.symbol} />
                    ))}
                </div>
            </div>
        </div>
    );
}