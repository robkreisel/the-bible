import React from "react";
import HistoryBook from './HistoryBook';
import WritingsBook from './WritingsBook';
import ProphecyBook from './ProphecyBook';
import history from '../data/otHistory';
import writings from '../data/otWritings';
import prophecy from '../data/otProphecy';

export default function OTDetails() {
    return (
        <div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
            <div className="mb-3 text-gray-400">History</div>
            <div className="flex flex-wrap gap-1">
                {history.map((book) => (
                <HistoryBook book={book} key={book.symbol} />
                ))}
            </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
            <div className="mb-3 text-gray-400">Writings</div>
            <div className="flex flex-wrap gap-1">
                {writings.map((book) => (
                <WritingsBook book={book} key={book.symbol} />
                ))}
            </div>
            </div>
            <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
            <div className="mb-3 text-gray-400">Prophecy</div>
            <div className="flex flex-wrap gap-1">
                {prophecy.map((book) => (
                <ProphecyBook book={book} key={book.symbol} />
                ))}
            </div>
            </div>
        </div>
    );
}