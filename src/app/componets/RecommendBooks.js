import React, { useCallback, useRef } from "react";
import ListSkeletonBook from "./ListSkeletonBook";
import ImageLoading from "./ImageLoading";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDropright } from "react-icons/io";

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
          >
            {bookList.map((book, idx) => (
              <SwiperSlide key={idx} className="shadow-lg rounded-md my-2">
                <li
                  className="cursor-pointer grid grid-cols-2 gap-5 pr-2 hover:opacity-75"
                  key={idx}
                >
                  <div className="col-span-1 h-[210px]">
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
