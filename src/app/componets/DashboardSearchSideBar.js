import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { genresItems } from "../utils/constants";

function DashboardSearchSideBar({ onFilter, isLoading, genres }) {
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
                }  ${genres === item.sort ? "side-menu-active" : ""} `}
                key={idx}
                onClick={() => {
                  if (!isLoading) {
                    if (genres !== item.sort) {
                      onFilter(item.sort);
                    }
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
