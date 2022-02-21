import React from "react";
import BookSet from "./BookSet";

export default function NTChronological() {
  return (
    <div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Gospels</div>
        <BookSet symbols={["Lk", "Mk", "Mt", "Jn"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Church</div>
        <BookSet symbols={["Ac"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Missions</div>
        <div className="flex gap-1">
          <BookSet symbols={["Ac"]} />
          <div className="flex-none">
            <BookSet symbols={["Ja", "Ga"]} />
            <BookSet symbols={["1Th", "2Th"]} />
            <BookSet symbols={["1Co", "2Co", "Ro"]} />
          </div>
        </div>
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Epistles</div>
        <BookSet symbols={["Ep", "Cs", "Ph", "Pl"]} />
        <BookSet symbols={["1Ti", "Tt", "1Pe", "2Pe"]} />
        <BookSet symbols={["2Ti", "He", "Jd"]} />
        <BookSet symbols={["1Jn", "2Jn", "3Jn", "Re"]} />
      </div>
    </div>
  );
}
