import React from "react";
import BookSet from "./BookSet";

export default function OTChronological() {
  const kingdomR2Symbols = ["2Sa", "1Ch", "Ps"];
  const kingdomR3Symbols = ["1Ki", "2Ch", "Pr", "Ec", "Ss"];
  const kingdomR4Symbols = [
    "2Ki",
    "Ob",
    "Jo",
    "Jh",
    "Am",
    "Ho",
    "Mi",
    "Is",
    "Na",
    "Zp",
    "Ha",
  ];
  const exileSymbols = ["Ez", "Je", "La", "Da"];
  const returnR1Symbols = ["Er", "Es", "Hg", "Zc"];
  const returnR2Symbols = ["Ne", "Ma"];

  return (
    <div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Creation</div>
        <BookSet symbols={["Ge"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Patriarch</div>
        {/* <div className="flex">
          <div className="grid grid-cols-2 gap-1">
            {data
              .filter(function (book) {
                return book.era.includes("patriarch");
              })
              .map((book) => (
                <Book book={book} key={book.symbol} />
              ))}
          </div>
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Exodus</div>
        {/* <div className="flex">
          <div className="grid grid-rows-2 grid-cols-2 gap-1">
            {data
              .filter(function (book) {
                return book.era.includes("exodus");
              })
              .map((book) => (
                <Book book={book} key={book.symbol} />
              ))}
          </div>
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Conquest</div>
        {/* <div className="flex flex-wrap gap-1">
          {data
            .filter(function (book) {
              return book.era.includes("conquest");
            })
            .map((book) => (
              <Book book={book} key={book.symbol} />
            ))}
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Judges</div>
        {/* <div className="flex">
          <div className="grid grid-cols-2 gap-1">
            {data
              .filter(function (book) {
                return book.era.includes("judges");
              })
              .map((book) => (
                <Book book={book} key={book.symbol} />
              ))}
          </div>
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Kingdom</div>
        <BookSet symbols={kingdomR3Symbols} />
        {/* <div className="pb-1">
          <Book
            book={data.find(function (book) {
              return book.symbol === "1Sa";
            })}
          />
        </div>
        <div className="flex pb-1">
          <div className="grid grid-cols-5 gap-1">
            {kingdomR2Symbols.map(function (symbol) {
              return (
                <Book
                  book={data.find(function (book) {
                    return book.symbol === symbol;
                  })}
                  //   key={book.symbol}
                />
              );
            })}
          </div>
        </div>
        <div className="flex pb-1">
          <div className="grid grid-cols-5 gap-1">
            {kingdomR3Symbols.map(function (symbol) {
              return (
                <Book
                  book={data.find(function (book) {
                    return book.symbol === symbol;
                  })}
                  //   key={book.symbol}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {kingdomR4Symbols.map(function (symbol) {
            return (
              <Book
                book={data.find(function (book) {
                  return book.symbol === symbol;
                })}
                //   key={book.symbol}
              />
            );
          })}
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Exile</div>
        {/* <div className="flex flex-wrap gap-1">
          {exileSymbols.map(function (symbol) {
            return (
              <Book
                book={data.find(function (book) {
                  return book.symbol === symbol;
                })}
                // key={book.symbol}
              />
            );
          })}
        </div> */}
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Return</div>
        {/* <div className="flex pb-1">
          <div className="grid grid-cols-5 gap-1">
            {returnR1Symbols.map(function (symbol) {
              return (
                <Book
                  book={data.find(function (book) {
                    return book.symbol === symbol;
                  })}
                  //   key={book.symbol}
                />
              );
            })}
          </div>
        </div>
        <div className="flex pb-1">
          <div className="grid grid-cols-5 gap-1">
            {returnR2Symbols.map(function (symbol) {
              return (
                <Book
                  book={data.find(function (book) {
                    return book.symbol === symbol;
                  })}
                  //   key={book.symbol}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}
