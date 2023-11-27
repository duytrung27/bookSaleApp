"use client";

import { Pagination } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopularBooks from "../componets/PopularBooks";
import PopularHeader from "../componets/PopularHeader";
import SearchSideBar from "../componets/SearchSideBar";
import { getPopularBooks } from "../store/features/book.slice";
import { STANDARD_OFFSET } from "../utils/constants";
import { useSearchParams } from "next/navigation";

function PopularPage() {
  const dispatch = useDispatch();
  const popularRef = useRef(null);
  const query = useSearchParams();
  const page = query.get("page");
  const genres = query.get("genres");

  const { popularList, isLoadingPopular, totalPage } = useSelector(
    (state) => state.book
  );

  const [activeGenres, setActiveGenres] = useState(genres || "");
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);

  useEffect(() => {
    const offset = page ? parseInt(page) : 1;
    const type = genres || "";
    dispatch(getPopularBooks({ offset: (offset - 1) * STANDARD_OFFSET, type }));
    popularRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dispatch, page, genres]);

  const onFilterPopularBook = (genres) => {
    setActiveGenres(genres);
    setCurrentPage(1);
    window.history.replaceState(
      null,
      "",
      `/popular?genres=${genres}&page=${1}`
    );
    popularRef.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(getPopularBooks({ type: genres }));
  };

  const onPaging = (page) => {
    if (!isLoadingPopular) {
      setCurrentPage(page);
      window.history.replaceState(
        null,
        "",
        `/popular?genres=${activeGenres}&page=${page}`
      );
      popularRef.current?.scrollIntoView({ behavior: "smooth" });
      dispatch(
        getPopularBooks({
          offset: (page - 1) * STANDARD_OFFSET,
          type: activeGenres,
        })
      );
    }
  };

  return (
    <main>
      <PopularHeader />
      <div className="bg-neutral-100 h-auto w-screen">
        <div className="lg:grid grid-cols-5 container py-[60px]">
          <div className="hidden lg:block col-span-1 relative">
            <SearchSideBar
              genres={activeGenres}
              onFilter={onFilterPopularBook}
              isLoading={isLoadingPopular}
            />
          </div>
          <div ref={popularRef} className="col-span-4 min-h-fit">
            <div className="cover-card">
              <PopularBooks
                bookList={popularList}
                isLoading={isLoadingPopular}
                genres={activeGenres}
                slice={false}
                onChangeGenres={onFilterPopularBook}
                placeHolderItem={STANDARD_OFFSET}
                isShowViewMore={false}
              />
            </div>
            <div className="flex justify-center mt-10">
              <Pagination
                totalPages={totalPage}
                currentPage={currentPage}
                onPageChange={onPaging}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PopularPage;
