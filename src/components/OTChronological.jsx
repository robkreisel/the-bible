import React from "react";
import BookSet from "./BookSet";

export default function OTChronological() {
  return (
    <div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Creation</div>
        <BookSet symbols={["Ge"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Patriarch</div>
        <BookSet symbols={["Ge", "Jb"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Exodus</div>
        <BookSet symbols={["Ex", "Lv"]} />
        <BookSet symbols={["Nu", "Dt"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Conquest</div>
        <BookSet symbols={["Js"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Judges</div>
        <BookSet symbols={["Ju", "Ru"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Kingdom</div>
        <BookSet symbols={["1Sa"]} />
        <BookSet symbols={["2Sa", "1Ch", "Ps"]} />
        <BookSet symbols={["1Ki", "2Ch", "Pr", "Ec", "Ss"]} />
        <div className="flex gap-1">
          <BookSet symbols={["2Ki"]} />
          <BookSet
            symbols={[
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
            ]}
          />
        </div>
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Exile</div>
        <BookSet symbols={["Ez", "Je", "La", "Da"]} />
      </div>
      <div className="m-3 p-3 md:m-10 bg-gray-100 shadow-md overflow-hidden">
        <div className="mb-3 text-gray-400">Return</div>
        <BookSet symbols={["Er", "Es", "Hg", "Zc"]} />
        <BookSet symbols={["Ne", "Ma"]} />
      </div>
    </div>
  );
}
