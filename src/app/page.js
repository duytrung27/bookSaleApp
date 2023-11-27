"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "./componets/DashboardHeader";
import SearchSideBar from "./componets/SearchSideBar";
import PopularBooks from "./componets/PopularBooks";
import RecommendBooks from "./componets/RecommendBooks";
import MostLikeBooks from "./componets/MostLikeBooks";
import NewStoryBooks from "./componets/NewStoryBooks";
import RevealOnScroll from "./componets/RevealOnScroll";
import {
  getLikeBooks,
  getNewBooks,
  getPopularBooks,
  getRecommendBooks,
} from "./store/features/book.slice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const popularRef = useRef(null);
  const {
    popularList,
    isLoadingPopular,
    isLoadingRecommened,
    recommendList,
    newBooksList,
    isLoadingNewBooks,
    likeBooksList,
    isLoadingLikeBooks,
  } = useSelector((state) => state.book);

  const [activeGenres, setActiveGenres] = useState("");

  useEffect(() => {
    dispatch(getPopularBooks());
    dispatch(getRecommendBooks());
    dispatch(getNewBooks());
    dispatch(getLikeBooks());
  }, [dispatch]);

  const onFilterPopularBook = (genres) => {
    setActiveGenres(genres);
    popularRef.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(getPopularBooks(genres ? { type: genres, offset: 0 } : ""));
  };

  return (
    <main>
      <DashboardHeader />
      <div className="bg-neutral-100 h-auto w-screen">
        <div className="lg:grid grid-cols-5 container py-[60px]">
          <div className="hidden lg:block col-span-1 relative">
            <SearchSideBar
              genres={activeGenres}
              onFilter={onFilterPopularBook}
              isLoading={isLoadingPopular}
            />
          </div>
          <div className="col-span-4 min-h-fit">
            <div ref={popularRef} className="cover-card">
              <PopularBooks
                bookList={popularList}
                isLoading={isLoadingPopular}
                genres={activeGenres}
                onChangeGenres={onFilterPopularBook}
              />
              <RecommendBooks
                bookList={recommendList}
                isLoading={isLoadingRecommened}
              />
            </div>
            <div className="mt-20 object-contain w-full rounded-md">
              <RevealOnScroll animate="animate__fadeInTopRight">
                <Image
                  src="/images/poster.jpeg"
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-md h-[350px] xl:h-[450px] w-full"
                />
              </RevealOnScroll>
            </div>

            <div className="mt-20 cover-card">
              <NewStoryBooks
                bookList={newBooksList}
                isLoading={isLoadingNewBooks}
              />
              <MostLikeBooks
                bookList={likeBooksList}
                isLoading={isLoadingLikeBooks}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
