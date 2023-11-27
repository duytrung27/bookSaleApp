import React from "react";
import ImageLoading from "./ImageLoading";
import ListSkeletonBook from "./ListSkeletonBook";
import { FaRegShareFromSquare } from "react-icons/fa6";

const NewStoryBooks = ({ bookList, isLoading }) => {
  return (
    <div>
      <h2 className="text-[25px] font-bold capitalize">The new story</h2>
      {isLoading ? (
        <ListSkeletonBook />
      ) : (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bookList.slice(0, 6).map((book, idx) => (
            <li
              className="cursor-pointer grid grid-cols-2 gap-5 shadow-lg rounded-md pr-2 hover:opacity-75"
              key={idx}
            >
              <div className="col-span-1 h-[210px] shadow-md">
                <ImageLoading
                  className="w-full h-[210px] object-cover rounded-l-md"
                  src={book.image}
                />
              </div>
              <div className="grid-cols-2 flex flex-col gap-2 justify-between">
                <h3
                  className={`${
                    book.title?.length > 30 ? "text-[14px]" : "text-[18px]"
                  } font-bold mt-2 line-clamp-4`}
                >
                  {book.title}
                </h3>
                <div>
                  <p className="text-[12px] line-clamp-2">
                    by <span className="font-bold">{book.author}</span>
                  </p>
                  <p className="font-semibold my-2">{book.pulishYear}</p>
                  <FaRegShareFromSquare
                    size={18}
                    className="mb-2"
                    color="#FF971D"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewStoryBooks;
