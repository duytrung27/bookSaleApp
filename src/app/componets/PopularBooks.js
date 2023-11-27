import React from "react";
import ImageLoading from "./ImageLoading";
import ListSkeletonBook from "./ListSkeletonBook";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Dropdown } from "flowbite-react";
import { genresItems } from "../utils/constants";
import { useRouter } from "next/navigation";

const PopularBooks = ({
  bookList,
  isLoading,
  genres = "",
  onChangeGenres,
  slice = true,
  placeHolderItem = 6,
  isShowViewMore = true,
}) => {
  const navigate = useRouter();

  const label = genresItems.find((el) => el.sort === genres);

  const onNavigate = () => {
    navigate.push(`popular?genres=${genres}`);
  };

  return (
    <div className="min-h-[300px]">
      <div className="flex justify-between items-center">
        <h2
          onClick={onNavigate}
          className="cursor-pointer text-[25px] font-bold"
        >
          Popular
        </h2>
        {isShowViewMore ? (
          <p
            onClick={onNavigate}
            className="text-primary text-[14px] cursor-pointer"
          >
            View all
          </p>
        ) : (
          <React.Fragment />
        )}
      </div>
      <div className="my-5 lg:hidden">
        <Dropdown label={label.name} color="light">
          {genresItems.map((item, idx) => (
            <Dropdown.Item onClick={() => onChangeGenres(item.sort)} key={idx}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>

      {isLoading ? (
        <ListSkeletonBook items={placeHolderItem} />
      ) : (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bookList.slice(0, slice ? 6 : 12).map((book, idx) => (
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

export default PopularBooks;
