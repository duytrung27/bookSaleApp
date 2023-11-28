"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookDetailHeader from "../../componets/BookDetailHeader";
import ImageLoading from "../../componets/ImageLoading";
import { getBookDetail } from "../../store/features/book-detail.slice";
import { getSearcBook } from "../../store/features/search.slice";
import BookCard from "../../componets/BookCard";
import BookDetailSkeleton from "../../componets/BookDetailSkeleton";
import { FaRegShareFromSquare } from "react-icons/fa6";
import ShareModal from "../../componets/ShareModal";

const BookDetailPage = ({ params }) => {
  const dispatch = useDispatch();
  const query = useSearchParams();
  const author = query.get("author") || "unknow";

  const { bookData, isLoading } = useSelector((state) => state.detail);
  const sameSerupa = useSelector((state) => state.search);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getBookDetail(params.id));
    dispatch(getSearcBook({ word: author }));
  }, [dispatch, params, author]);

  return (
    <main className="relative">
      <BookDetailHeader />
      {sameSerupa.isLoading ? (
        <BookDetailSkeleton />
      ) : (
        <div className="bg-mainBg min-h-[400px]">
          <div className="container lg:grid grid-cols-7 gap-10 -mt-96 pb-20">
            <div className="z-10 col-span-5 bg-white rounded-sm shadow-lg">
              <div className="md:grid grid-cols-6">
                <div className="z-10 flex justify-center md:justify-start relative col-span-2 w-full h-[435px] rounded-sm shadow-lg">
                  <div className="absolute flex items-center justify-center w-[300px] md:w-full top-2/4 -translate-y-2/4">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                  <ImageLoading
                    src={bookData?.image}
                    className="absolute w-[300px] md:w-full h-[435px] object-cover rounded-sm shadow-lg"
                  />
                </div>
                <div className="z-10 col-span-4 text-black py-5 px-10 text-center md:text-left">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">
                      {bookData?.title}
                    </h1>
                    <h3>
                      by <span className="font-semibold text-md">{author}</span>
                    </h3>
                    <h4 className="text-[14px]">
                      Time :{" "}
                      <span className="font-semibold text-md">
                        {bookData?.subjectTimes}
                      </span>
                    </h4>
                    <h4 className="text-[14px]">
                      Place:{" "}
                      <span className="font-semibold text-md">
                        {bookData?.subjectPlaces}
                      </span>
                    </h4>
                    <div className="flex w-auto">
                      <FaRegShareFromSquare
                        size={22}
                        className="mb-2 cursor-pointer"
                        color="#FF971D"
                        onClick={() => setOpenModal(true)}
                      />
                      <p
                        onClick={() => setOpenModal(true)}
                        className="ml-3 text-primary cursor-pointer"
                      >
                        Share this book
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-10 py-5">
                <h4 className="mb-10 text-[16px] overflow-hidden">
                  {bookData?.description}
                </h4>
                <h4 className="text-[14px]">
                  Subject:{" "}
                  <span className="font-semibold text-md">
                    {bookData?.subjects}
                  </span>
                </h4>
              </div>
            </div>
            <div className="rounded-sm p-5 z-10 col-span-2 bg-white">
              <h1 className="mb-10 text-3xl font-semibold text-primary">
                Cerita serupa
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                {sameSerupa.searchBookList.slice(0, 6).map((book, idx) => (
                  <BookCard key={idx} book={book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ShareModal
        shareUrl={window.location.href}
        openModal={openModal}
        onCloseModal={() => setOpenModal(!openModal)}
        title={bookData?.title}
      />
    </main>
  );
};

export default BookDetailPage;
