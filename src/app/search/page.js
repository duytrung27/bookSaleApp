"use client";

import { Pagination } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../componets/BookCard";
import NoBookFound from "../componets/NoBookFound";
import ListSkeletonBook from "../componets/ListSkeletonBook";
import SearchBook from "../componets/SearchBook";
import SearchingHeader from "../componets/SearchingHeader";
import { getSearcBook } from "../store/features/search.slice";

function SearchPage() {
  const dispatch = useDispatch();
  const query = useSearchParams();
  const word = query.get("word");
  const page = query.get("page");

  const ref = useRef(null);
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [searchWord, setSearchWord] = useState(word || "");

  const { searchBookList, isLoading, totalPage } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    if (searchWord) {
      dispatch(getSearcBook({ word: searchWord, page: currentPage }));
    }
  }, [dispatch, searchWord, currentPage]);

  const onSearchBook = (book) => {
    setSearchWord(book);
    setCurrentPage(1);
    window.history.replaceState(null, "", `/search?word=${book}&page=1`);
  };

  const onPaging = (page) => {
    if (!isLoading) {
      setCurrentPage(page);
      window.history.replaceState(
        null,
        "",
        `/search?word=${searchWord}&page=${page}`
      );
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderContent = () => {
    if (!isLoading && searchBookList.length === 0) return <NoBookFound />;
    if (isLoading) return <ListSkeletonBook items={12} isShowFull={true} />;
    return (
      <div>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {searchBookList.map((book, idx) => (
            <BookCard book={book} key={idx} />
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            onPageChange={onPaging}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <main>
        <SearchingHeader />
        <div className="bg-neutral-100 h-auto w-screen">
          <div ref={ref} className="lg:grid container py-[40px]">
            <div className="min-h-[300px]">
              <div className="sm:flex items-center pb-5">
                <h2 className="cursor-pointer text-[25px] font-bold mr-10 mb-4 sm:mb-0">
                  Search
                </h2>
                <SearchBook onSubmit={onSearchBook} initValue={word} />
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;
