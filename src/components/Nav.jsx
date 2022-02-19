import React from "react";

export default function Nav() {
  return (
    <div>
      <button
        className="rounded-none bg-gray-200 p-3 m-2"
        // onClick={handleClick}
      >
        HS-Cat
      </button>
      <button className="rounded-none bg-gray-200 p-3 m-2">NC-Cat</button>
      <button className="rounded-none bg-gray-200 p-3 m-2">HS-Chron</button>
      <button className="rounded-none bg-gray-200 p-3 m-2">NC-Chron</button>
    </div>
  );
}
