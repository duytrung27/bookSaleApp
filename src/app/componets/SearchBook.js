import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";

const SearchBook = ({ initValue = "", onSubmit }) => {
  const inputRef = useRef(null);
  const [books, setBooks] = useState(initValue);

  const handleSubmit = () => {
    if (books) onSubmit(books);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="z-10 flex items-center rounded-[4px] shadow-md bg-neutral-100 w-auto min-w-[320px]"
      >
        <CiSearch
          onClick={handleSubmit}
          color="black"
          size={20}
          className="ml-3 cursor-pointer"
        />
        <input
          ref={inputRef}
          type="text"
          value={books}
          onChange={(e) => setBooks(e.target.value)}
          placeholder="Search Book By Name & Author"
          className="w-full text-black bg-transparent border-none focus:ring-transparent"
        />
        {books?.length > 0 ? (
          <FaDeleteLeft
            onClick={() => {
              setBooks("");
              inputRef.current?.focus();
            }}
            color="black"
            size={25}
            className="mr-3 cursor-pointer"
          />
        ) : (
          <React.Fragment />
        )}
      </form>
    </div>
  );
};

export default SearchBook;
