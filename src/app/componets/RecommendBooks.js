import React, { useCallback, useRef } from "react";
import ListSkeletonBook from "./ListSkeletonBook";
import ImageLoading from "./ImageLoading";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDropright } from "react-icons/io";
import BookCard from "./BookCard";

const RecommendBooks = ({ bookList = [], isLoading = false }) => {
  const sliderRef = useRef(null);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);

  return (
    <div>
      <h2 className="text-[25px] font-bold mt-10">Recommended</h2>
      {isLoading ? (
        <ListSkeletonBook items={3} />
      ) : (
        <ul className="mt-6 relative">
          <Swiper
            ref={sliderRef}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="py-5 px-1"
          >
            {bookList.map((book, idx) => (
              <SwiperSlide key={idx} className="shadow-lg rounded-md">
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="z-20 absolute bg-white flex items-center justify-center top-2/4 -translate-y-2/4 -right-4 cursor-pointer w-8 h-8 shadow-lg rounded-full">
            <IoIosArrowDropright size={25} color="black" onClick={handleNext} />
          </div>
        </ul>
      )}
    </div>
  );
};

export default RecommendBooks;
