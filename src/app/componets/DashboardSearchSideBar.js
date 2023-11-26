import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const genresItems = [
  {
    name: "All Genres",
    sort: "",
  },
  {
    name: "Business",
    sort: "business",
  },
  {
    name: "Science",
    sort: "science",
  },
  {
    name: "Fiction",
    sort: "fiction",
  },
  {
    name: "Philosophy",
    sort: "philosophy",
  },
  {
    name: "Biography",
    sort: "biography",
  },
];

function DashboardSearchSideBar({ onFilter, isLoading }) {
  const [sort, setSort] = useState("");

  return (
    <div className="sticky top-0">
      <RevealOnScroll animate="animate__rotateInDownLeft">
        <div>
          <h2 className="text-[25px] font-bold">Book by Genres</h2>
          <ul className="flex flex-col gap-3 mt-3">
            {genresItems.map((item, idx) => (
              <li
                className={`cursor-pointer text-base px-3 w-[70%] ${
                  isLoading ? "text-gray-400" : ""
                }  ${sort === item.sort ? "side-menu-active" : ""} `}
                key={idx}
                onClick={() => {
                  if (!isLoading) {
                    setSort(item.sort);
                    if (sort !== item.sort) onFilter(item.sort);
                  }
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </div>
  );
}

export default DashboardSearchSideBar;
