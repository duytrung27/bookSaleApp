import { Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { genresItems } from "../utils/constants";
import ListSkeletonBook from "./ListSkeletonBook";
import BookCard from "./BookCard";

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
  const [label, setLabel] = useState("");

  useEffect(() => {
    const label = genresItems.find((el) => el.sort === genres);
    if (label === undefined) navigate.push("/404");
    setLabel(label);
  }, [genres, navigate]);

  const onNavigate = () => {
    navigate.push(genres ? `popular?genres=${genres}` : "popular");
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
        <Dropdown label={label?.name} color="light">
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
            <BookCard book={book} key={idx} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularBooks;
